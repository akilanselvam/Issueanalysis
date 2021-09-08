import { Component, OnInit } from '@angular/core';
import { SubpoService } from '../subpo.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-subposts',
  templateUrl: './subposts.component.html',
  styleUrls: ['./subposts.component.css']
})
export class SubpostsComponent implements OnInit {
  public posts =[];
  postId: number;
  constructor(private _http:SubpoService,private activateRoute: ActivatedRoute,private router: Router) { this.postId = this.activateRoute.snapshot.params.id;}
  
  ngOnInit() {
    
    this._http.getAPIData(this.postId).subscribe(data => this.posts =data);
  }
  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id);
  }

}
