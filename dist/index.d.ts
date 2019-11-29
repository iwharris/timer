/**
 * High resolution time tuple in the form [elapsedSeconds, elapsedNanoseconds].
 */
export declare type HRTime = [number, number];
/**
 * Wrapper around process.hrtime().
 *
 * @example
 */
export declare class Timer {
    private rawTime;
    constructor();
    get time(): HRTime;
    /**
     * (re)starts the timer.
     */
    start(): void;
    /**
     * Gets the HRTime tuple representing elapsed time.
     *
     * @returns HRTime
     */
    elapsed(): HRTime;
    /**
     * Gets the elapsed time in milliseconds, rounded to the nearest millisecond.
     */
    elapsedMilliseconds(): number;
    /**
     * Gets the elapsed time in nanoseconds, rounded to the nearest nanosecond.
     */
    elapsedNanoseconds(): number;
    /**
     * Gets the elapsed time in seconds, rounded to the nearest second.
     */
    elapsedSeconds(): number;
}
export default Timer;
