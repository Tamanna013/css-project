loadConfettiPreset(tsParticles);
            let confettiContainer;
            tsParticles
                .load("tsparticles", {
                    particles: {
                        shape: {
                            type: "character",
                            character: {
                                value: ["❤️"]
                            }, move: {
                                direction: "top"
                            },
                        }
                    },
                    preset: "confetti",
                    emitters: []
                })
                .then((container) => (confettiContainer = container));
            layout.addEventListener("click", () => {
                confettiContainer.addEmitter({
                    size: {
                        width: 100,
                        height: 0
                    },
                    startCount: 30,
                    position: {
                        "x": 50,
                        "y": 50
                    },
                    rate: {
                        delay: 0,
                        quantity: 20
                    },
                    life: {
                        duration: 0.2,
                        count: 2
                    }
                },
            )});