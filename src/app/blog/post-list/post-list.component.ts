import { Component, Input, OnInit } from '@angular/core';
import { BlogPostQueryResult, client } from 'src/app/services/queries.groq';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import _ from 'lodash';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';
import { SanityService } from 'src/app/services/sanity.service';
import { PortableTextService } from 'src/app/shared/portable-text/portable-text.service';

export type ListCategory = 
  'latest' | 
  'featured' | 
  'latestAll' |
  'featuredAll' |
  undefined;

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() listCategory: ListCategory;
  @Input() summary: boolean = true;
  @Input() posts!: BlogPostQueryResult[];

  imageBuilder = imageUrlBuilder(client)
  listTitle: string = 'Posts';
  latestPosts!: BlogPostQueryResult[];
  featuredPosts!: BlogPostQueryResult[];

  constructor(
    private blogService: BlogService,
    private router: Router,
    public sanityService: SanityService,
    public portableTextService: PortableTextService,
  ) {
    this.blogService.posts$.subscribe(posts => {
      this.getLatestPosts(posts);
      this.getFeaturedPosts(posts);
    });
  }

  ngOnInit(): void {
    if (this.listCategory === 'latest') this.listTitle = 'Latest Posts';
    if (this.listCategory === 'featured') this.listTitle = 'Featured Posts';
  }

  getLatestPosts(posts: BlogPostQueryResult[]) {
    this.latestPosts = _.orderBy(posts, (post) => {
      if (!post.publishedAt) return;
      return new Date(post.publishedAt);
    }, ['desc']);
    console.log(this.latestPosts);
  }

  getFeaturedPosts(posts: BlogPostQueryResult[]) {
    this.featuredPosts = posts.filter((post) => post.featured);
  }

  urlFor(source: SanityImageSource) {
    return this.imageBuilder.image(source);
  }

  selectPost(slug: any) {
    if (!slug) return;
    this.router.navigate(['/blog', slug.current]);
  }

  onSeeAll(listCategory: ListCategory) {
    this.router.navigate(['blog', listCategory])
  }

}
