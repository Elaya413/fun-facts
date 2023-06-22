class FunFacts {

    constructor() {
        this.initVariables();
        this.startAnimation();
    }

    initVariables() {
        this.factList = [
            "It's never too late to learn to code.",
            "When learning to code, Google is your best friend.",
            "You feel like a super hero when fixing a bug in your code.",
            "Sometime code is full of bugs.",
            "It can turn from hobby to addiction in no time.",
            "Coding often ocupies your mind even when you are doing something else.",
            "It develops a creative thinker in you, don't underestimate it.",
            "There is always something new to learn, coding is a lifetime learning process."
        ];

        this.iconList = [
            "code",
            "search",
            "bug_report",
            "bug_report",
            "watch_later",
            "weekend",
            "tag_faces",
            "favorite"
        ];

        this.delayTime = 3000;
    }

    createElement(factListext, iconListText) {
        let p = document.querySelector(".ff-text p");
        let icon = document.querySelector(".ff-icon i");

        p.textContent = factListext;
        icon.textContent = iconListText;
    }

    startAnimation() {
        let randomFact = 0;

        setInterval(() => {
            randomFact = this.getRandomInt(0, this.factList.length - 1);
            this.createElement(this.factList[randomFact], this.iconList[randomFact]);
        }, this.delayTime);
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

new FunFacts();