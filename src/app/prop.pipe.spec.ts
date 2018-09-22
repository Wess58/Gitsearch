import { PropPipe } from './prop.pipe';

describe('PropPipe', () => {
  it('create an instance', () => {
    const pipe = new PropPipe();
    expect(pipe).toBeTruthy();
  });
});
