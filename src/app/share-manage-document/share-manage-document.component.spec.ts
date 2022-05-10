import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareManageDocumentComponent } from './share-manage-document.component';

describe('ShareManageDocumentComponent', () => {
  let component: ShareManageDocumentComponent;
  let fixture: ComponentFixture<ShareManageDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareManageDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareManageDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
