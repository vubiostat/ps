import { ReversePipe } from './reverse.pipe';

describe('app.ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });
});
