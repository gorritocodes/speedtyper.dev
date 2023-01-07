import { useEffect } from "react";
import { useIsPlaying } from "../../../common/hooks/useIsPlaying";
import { saveResult } from "../services/saveResults";
import { useCodeStore } from "../state/code-store";
import { useIsCompleted } from "./useIsCompleted";

export function useEndGame() {
  const endGame = useCodeStore((state) => state.end);
  const isCompleted = useIsCompleted();
  const isPlaying = useIsPlaying();
  useEffect(() => {
    if (isCompleted && isPlaying) {
      endGame();
      saveResult();
    }
  }, [endGame, isPlaying, isCompleted]);
}
