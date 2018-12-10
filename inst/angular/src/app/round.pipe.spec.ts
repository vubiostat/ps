import { RoundPipe } from './round.pipe';

describe('app.RoundPipe', () => {
  it('create an instance', () => {
    const pipe = new RoundPipe();
    expect(pipe).toBeTruthy();
  });
});
