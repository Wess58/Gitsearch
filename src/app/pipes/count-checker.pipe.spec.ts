import { CountCheckerPipe } from './count-checker.pipe';

describe('CountCheckerPipe', () => {
  it('create an instance', () => {
    const pipe = new CountCheckerPipe();
    expect(pipe).toBeTruthy();
  });
});
