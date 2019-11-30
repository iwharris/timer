/**
 * High resolution time tuple in the form [elapsedSeconds, elapsedNanoseconds].
 */
export type HRTime = [number, number];

/**
 * Wrapper around process.hrtime().
 *
 * @example
 */
export class Timer {
    private rawTime: HRTime;

    constructor() {
        this.start();
    }

    get time(): HRTime {
        return this.rawTime;
    }

    /**
     * (re)starts the timer.
     */
    start(): void {
        this.rawTime = process.hrtime();
    }

    /**
     * Gets the HRTime tuple representing elapsed time.
     *
     * @returns HRTime
     */
    elapsed(): HRTime {
        return process.hrtime(this.rawTime);
    }

    /**
     * Gets the elapsed time in milliseconds, rounded to the nearest millisecond.
     */
    elapsedMilliseconds(): number {
        const [seconds, nanos] = this.elapsed();
        return Math.round(seconds * 1e3 + nanos / 1e6);
    }

    /**
     * Gets the elapsed time in nanoseconds, rounded to the nearest nanosecond.
     */
    elapsedNanoseconds(): number {
        const [seconds, nanos] = this.elapsed();
        return seconds * 1e9 + nanos;
    }

    /**
     * Gets the elapsed time in seconds, rounded to the nearest second.
     */
    elapsedSeconds(): number {
        const [seconds, nanos] = this.elapsed();
        return Math.round(seconds + nanos / 1e9);
    }
}

export default Timer;
