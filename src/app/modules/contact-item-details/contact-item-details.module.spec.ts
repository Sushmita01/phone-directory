import { ContactItemDetailsModule } from './contact-item-details.module';

describe('ContactItemDetailsModule', () => {
  let contactItemDetailsModule: ContactItemDetailsModule;

  beforeEach(() => {
    contactItemDetailsModule = new ContactItemDetailsModule();
  });

  it('should create an instance', () => {
    expect(contactItemDetailsModule).toBeTruthy();
  });
});
