import { Timer, HRTime } from '../src/index';

describe('Timer', () => {
    let hrtimeSpy: jest.SpyInstance;

    beforeEach(() => {
        hrtimeSpy = jest.spyOn(process, 'hrtime');
    });

    afterEach(() => {
        hrtimeSpy.mockClear();
    });

    it('should start the timer upon construction', () => {
        hrtimeSpy.mockImplementation(() => [123, 456]);

        const timer = new Timer();

        expect(hrtimeSpy).toHaveBeenCalledTimes(1);
        expect(hrtimeSpy).toHaveBeenLastCalledWith<[]>();
        expect(timer.time).toEqual([123, 456]);
        expect(timer.elapsed()).toEqual([123, 456]);
    });

    it('should calculate elapsed time', () => {
        const timer = new Timer();

        hrtimeSpy.mockImplementation(() => [123, 123456789]);

        expect(timer.elapsedSeconds()).toBe(123);
        expect(timer.elapsedMilliseconds()).toBe(123123);
        expect(timer.elapsedNanoseconds()).toBe(123123456789);
        expect(hrtimeSpy).toHaveBeenCalledTimes(4);


    });
});