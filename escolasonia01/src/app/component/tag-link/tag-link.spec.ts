import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TagLink } from './tag-link';

describe('TagLink', () => {
  let component: TagLink;
  let fixture: ComponentFixture<TagLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagLink],
    }).compileComponents();

    fixture = TestBed.createComponent(TagLink);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
