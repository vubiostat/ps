import { DichotModule } from './dichot.module';

describe('DichotModule', () => {
  let dichotModule: DichotModule;

  beforeEach(() => {
    dichotModule = new DichotModule();
  });

  it('should create an instance', () => {
    expect(dichotModule).toBeTruthy();
  });
});
