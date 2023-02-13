import { BadRequestException, Injectable } from '@nestjs/common';
import { Challenge } from 'src/challenges/entities/challenge.entity';
import { RaceManager } from './race-manager.service';
import { KeyStroke, RacePlayer } from './race-player.service';

export class InvalidKeyStroke extends BadRequestException {
  constructor() {
    super('Incorrect keystroke');
  }
}

export class RaceNotStartedException extends BadRequestException {
  constructor() {
    super('Race not started');
  }
}

@Injectable()
export class KeyStrokeValidationService {
  constructor(private raceManager: RaceManager) {}

  getCurrentInputBeforeKeystroke(player: RacePlayer, keystroke: KeyStroke) {
    const currentInputBeforeKey = player
      .validKeyStrokes()
      .filter((stroke) => stroke.index < keystroke.index)
      .map((stroke) => stroke.key)
      .join('');
    return currentInputBeforeKey;
  }

  validateKeyStroke(player: RacePlayer, recentKeyStroke: KeyStroke) {
    this.validateRaceStarted(player.raceId);
    const currentInputBeforeKey = this.getCurrentInputBeforeKeystroke(
      player,
      recentKeyStroke,
    );
    const currentInput = currentInputBeforeKey + recentKeyStroke.key;
    const strippedCode = this.getStrippedCode(player.raceId, recentKeyStroke);
    const correct = currentInput === strippedCode;
    if (recentKeyStroke.correct && recentKeyStroke.correct !== correct) {
      throw new Error(
        `Unexpected keystroke: KeyStroke.correct=${recentKeyStroke.correct} expected=${correct}`,
      );
    }
  }

  validateRaceStarted(raceID: string) {
    const race = this.raceManager.getRace(raceID);
    if (!race.startTime && race.isMultiplayer()) {
      throw new RaceNotStartedException();
    }
  }

  private getStrippedCode(raceId: string, keystroke: KeyStroke) {
    const code = this.raceManager.getCode(raceId);
    const strippedCode = Challenge.getStrippedCode(
      code.substring(0, keystroke.index),
    );
    return strippedCode;
  }
}
