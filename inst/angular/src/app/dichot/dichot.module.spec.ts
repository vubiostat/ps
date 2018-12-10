import { DichotModule } from './dichot.module';

describe('dichot.DichotModule', () => {
  let dichotModule: DichotModule;

  beforeEach(() => {
    dichotModule = new DichotModule();
  });

  it('should create an instance', () => {
    expect(dichotModule).toBeTruthy();
  });
});
