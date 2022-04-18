class Start {
    constructor() {
        this.playerName = "Player 1"
        this.comName = "COM"
        this.playerOption;
        this.comOption;
        this.winner = ""
        this.RED = "#BD0000"
    }

    get getComOption() {
        return this.comOption;
    }

    set setComOption(option) {
        this.comOption = option;
    }

    get getPlayerOption() {
        return this.playerOption
    }

    set setPlayerOption(option) {
        this.playerOption = option;
    }

    randomOption() {
        const option = ["gunting", "kertas", "batu"];
        const com = option[Math.floor(Math.random() * option.length)];
        return com;
    }

    winCalculation() {
        if (this.comOption == "kertas" && this.playerOption == "gunting") {
            return this.winner = this.playerName
        } else if (this.comOption == "kertas" && this.playerOption == "batu") {
            return this.winner = this.comName;
        } else if (this.comOption == "gunting" && this.playerOption == "kertas") {
            return this.winner = this.comName;
        } else if (this.comOption == "gunting" && this.playerOption == "batu") {
            return this.winner = this.playerName
        } else if (this.comOption == "batu" && this.playerOption == "kertas") {
            return this.winner = this.playerName
        } else if (this.comOption == "batu" && this.playerOption == "gunting") {
            return this.winner = this.comName;
        } else {
            return this.winner = "DRAW"
        }
    }

    matchResult() {
        if (this.winner != "DRAW") {
            return `${this.winner} WIN !`;
        } else {
            return `DRAW`;
        }
    }
}

function pickOption(param) {
    const start = new Start();
    start.setPlayerOption = param;
    start.setComOption = start.randomOption();
    start.winCalculation();

    const textVs = document.getElementById("vs")
    textVs.textContent = "VS"
    textVs.style.color = start.RED

    setTimeout(() => {
        textVs.textContent = start.matchResult();
        textVs.style.color = "darkgreen"
        console.log(`${start.playerName} pick: ${start.getPlayerOption} VS ${start.comName} pick: ${start.getComOption}`)
        console.log(start.matchResult())
    }, 1000);
}

function refresh() {
    const start = new Start();
    const textVs = document.getElementById("vs")
    textVs.textContent = "VS"
    textVs.style.color = start.RED
    console.log("refresh")
}