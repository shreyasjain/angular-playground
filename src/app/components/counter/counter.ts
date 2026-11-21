import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { CounterService } from '../../services/counter';

interface Post {
  id: string,
  title: string
}

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter implements OnInit {
  private http = inject(HttpClient)
  counterService = inject(CounterService)

  title = signal('')
  error = signal('')
  loading = signal(false)

  ngOnInit(): void {
    this.fetchPosts()
  }

  // updateCount(c: number) {
  //   if (c === +1) {
  //     this.count.update(i => i + 1)
  //   } else {
  //     this.count.update(i => i - 1)
  //   }
  //   if (this.count() >= 0) {
  //     this.fetchPosts()
  //   }
  // }

  fetchPosts(){
    this.loading.set(true)
      this.error.set('')
      this.title.set('')
      this.http
        .get<Post>(`https://jsonplaceholder.typicode.com/posts/${this.counterService.count()}`)
        .subscribe({
          next: (res) => {
            this.title.set(res.title)
            this.loading.set(false)
            this.error.set('')
          },
          error: (err) => {
            this.error.set(err.message)
            this.loading.set(false)
            this.title.set('')
          },
        })
  }
}
