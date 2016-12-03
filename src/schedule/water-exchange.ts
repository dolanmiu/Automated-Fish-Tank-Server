import {CronJob} from "cron";

export class WaterExchangeSchedule {

    private job: CronJob;

    constructor() {
        this.job = new CronJob({
            cronTime: "* * * * * *",
            onTick: () => {
                console.log("Clearing out tank with pump");
            },
            onComplete: () => {
            }
        });
    }

    public Start(): void {
        this.job.start();
    }

    public Stop(): void {
        this.job.stop();
    }
}
