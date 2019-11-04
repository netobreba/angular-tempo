import { Directive, ElementRef, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { fromEvent } from 'rxjs';
import 'rxjs/Rx';

@Directive({
  selector: '[appDebounceValue]'
})
export class DebounceValueDirective implements OnInit {

    @Input()
    debounceTime: number = 1000;

    @Output()
    val: EventEmitter<string> = new EventEmitter<string>();

    constructor(private element: ElementRef) { }

    ngOnInit(): void {
        this.setupDebounce();
    }

    /**
     * Initial debounce setting.
     *
     */
    protected setupDebounce(): void {
        fromEvent(this.element.nativeElement, 'keyup')
        .map((evt: any) => evt.target.value)
        .debounceTime(this.debounceTime)
        .distinctUntilChanged()
        .subscribe((text: string) => this.onChangeValue(text));
    }

    /**
     * Emit event with new value.
     * 
     * @param text 
     */
    protected onChangeValue(text: string): void {
        this.val.emit(text);
    }

}