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
        if (this.levelHistory.length === 0 || anyway) return {
            level: this.currentLevels,
            history: this.levelHistory
        }

        return null;
    }

    #postLevel = () => {
        return this.currentLevels;//TODO: post level
    }


    updateLevelFromHistory = () => {
        const noHistory = this.#checkForNoHistory();
        if (noHistory)
            return noHistory.level;

        const last = this.levelHistory[this.levelHistory.length - 1];
        const nextLevel = this.levelData.levels
            .find(l => l.level === last.level)?.items
            .find(i => i.id === last.selected)?.nextLevel;

        if (nextLevel === 0)
            return this.#postLevel();

        const rest = this.levelHistory.slice(this.levelHistory.map(item => item.role).lastIndexOf('level') + 1); // Use this.levelHistory
        return this.levelData.levels.filter(l => l.level === nextLevel || rest.find(i => i.level === l.level));
    }

    updateHistory = (level, item) => {
        const id = `${level.level}${item.id}${item.nextLevelRole}`;
        let newHistory = this.levelHistory;

        if (newHistory.find(h => h.id === id)) {
            newHistory = newHistory.slice(0, newHistory.map(h => h.id).lastIndexOf(id));
        }

        return [...newHistory, {id: id, level: level.level, selected: item.id, role: item.nextLevelRole}];
    }

    getPreviousLevel = () => {
        const noHistory = this.#checkForNoHistory();
        if (noHistory)
            return noHistory;

        const lastIndex = this.levelHistory.map(i => i.role).lastIndexOf('level');

        if (lastIndex === -1)
            return this.#checkForNoHistory(true);

        return {
            level: this.levelData.levels.filter(l => l.level === this.levelHistory[lastIndex].level),
            history: this.levelHistory.slice(0, lastIndex)
        }
    }
}


export default HandleLevels;