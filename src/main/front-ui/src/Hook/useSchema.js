import {useCallback, useState} from "react";

const useSchema = (levels, initialLevelIndex = 0) => {
    const [currentIndex, setCurrentIndex] = useState(initialLevelIndex);
    const [level, setLevel] = useState(levels[initialLevelIndex]);
    const [history, setHistory] = useState([initialLevelIndex]);

    const totalSteps = levels.length - 1;

    const next = useCallback((formData) => {
        const nextLevelIndex = level.$calcNext(formData);
        setCurrentIndex(nextLevelIndex);
        setLevel(levels[nextLevelIndex]);
        setHistory(prevHistory => [...prevHistory, nextLevelIndex]);
    }, [level]);

    const prev = useCallback(() => {
        setHistory(prevHistory => {
            if (prevHistory.length > 1) {
                const newHistory = prevHistory.slice(0, -1);
                const prevIndex = newHistory[newHistory.length - 1];
                setCurrentIndex(prevIndex);
                setLevel(levels[prevIndex]);
                return newHistory;
            }
            return prevHistory;
        });
    }, []);

    const getSchema = useCallback(() => ({
        totalSteps,
        nextIndex: currentIndex + 1,
        prevIndex: history.length > 1 ? history[history.length - 2] : currentIndex,  // Provide previous index from history
        currentIndex,
        level
    }), [currentIndex, history, level]);

    return { next, prev, getSchema };
};

export default useSchema;