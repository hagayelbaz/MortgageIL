class HandleLevels {
    levelHistory = [];
    levelData = {
        levels: []
    };
    currentLevels = [];

    constructor(levelHistory, levelData, currentLevels) {
        this.levelHistory = levelHistory;
        this.levelData = levelData;
        this.currentLevels = currentLevels;
    }

    #checkForNoHistory = (anyway) => {
        if (this.levelHistory.length === 0 || anyway)
            return {
                level: this.levelData.levels.filter(l => l.level === 1),
                history: this.levelHistory
            }

        return null;
    }

    #postLevel = () => {
        return this.currentLevels;//TODO: post level
    }


    updateLevelFromHistory = () => {
        // If there is no history, return the first level
        const noHistory = this.#checkForNoHistory();
        if (noHistory)
            return noHistory.level;

        const last = this.levelHistory[this.levelHistory.length - 1];
        const nextLevel = last.level.items.find(i => i.id === last.selected)?.nextLevel;

        if (nextLevel === 0)
            return this.#postLevel();

        const nextLevels = this.levelData.levels.filter(l => l.level === nextLevel);
        const lastLevelIndex = this.levelHistory.map(item => item.role).lastIndexOf('level') + 1;
        return this.levelHistory.slice(lastLevelIndex).map(i => i.level).concat(nextLevels);
    }

    updateHistory = (level, item) => {
        const id = `${level.level}${item.id}${item.nextLevelRole}`;
        let newHistory = this.levelHistory;

        // Remove all history after the current level
        if (newHistory.find(h => h.id === id)) {
            newHistory = newHistory.slice(0, newHistory.map(h => h.id).lastIndexOf(id));
        }

        return [...newHistory, {id: id, level: level , selected: item.id, role: item.nextLevelRole}];
    }

    getPreviousLevel = () => {
        const noHistory = this.#checkForNoHistory();
        if (noHistory)
            return noHistory.history;

        const lastIndex = this.levelHistory.map(i => i.role).lastIndexOf('level');

        if (lastIndex === -1)
            return this.#checkForNoHistory(true).history;

        return this.levelHistory.slice(0, lastIndex);
    }


    getLastLevelFromHistory = () => {
        const last = this.levelHistory[this.levelHistory.length - 1];
        return last ? this.levelData.levels.filter(l => l.level === last.level)[0] : null;
    }

    getCurrentLevels = () => {
        return this.currentLevels;
    }

    getLevelById = (id) => {
        return this.levelData.levels.find(l => l.level === id);
    }
}


export default HandleLevels;
