import { DirectoryManagementModule } from './directory-management.module';

describe('DirectoryManagementModule', () => {
  let directoryManagementModule: DirectoryManagementModule;

  beforeEach(() => {
    directoryManagementModule = new DirectoryManagementModule();
  });

  it('should create an instance', () => {
    expect(directoryManagementModule).toBeTruthy();
  });
});
