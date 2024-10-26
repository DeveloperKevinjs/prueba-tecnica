import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {
  
  @ViewChild('inputSearch')
  public tagInput!: ElementRef<HTMLInputElement>;

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
    .pipe(debounceTime(500))
    .subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }
  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  public emitValue( value: string ):void {
    this.onValue.emit( value );
  }

  public onKeyPress(search:string) {
    // const newValue = this.tagInput.nativeElement.value;
    // if (newValue.length === 0) return;
    this.debouncer.next(search);
  }

}
