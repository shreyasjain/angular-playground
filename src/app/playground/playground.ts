import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LifecycleDemo } from './components/lifecycle-demo/lifecycle-demo';
import { HighlightDirective } from './directives/highlight';
import { ReversePipe } from './pipes/reverse-pipe';
import { filter, from, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-playground',
  imports: [FormsModule, LifecycleDemo, HighlightDirective, ReversePipe],
  templateUrl: './playground.html',
  styleUrl: './playground.css',
})
export class Playground {
  username = signal('')

  constructor() {
    of(1, 2, 3, 4).pipe(
      tap(i=>console.log(i, 'before')),
      map(i => i * 10),
      tap(i=>console.log(i, 'mid')),
      filter(i => i > 20),
      tap(i=>console.log(i, 'after')),
    ).subscribe(res => console.log(res))

    from([1, 2, 3, 4]).pipe(
      map(i => i * 10),
      filter(i => i > 20)
    ).subscribe(res => console.log(res))

    effect(() => {
      if (this.username().endsWith(' ')) {
        this.username.update(c => c + ' Jain')
      }
    })
  }
}
