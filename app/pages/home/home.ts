import {Page} from 'ionic-angular';
import {GithubService} from '../../providers/github/github';

@Page({
  templateUrl: 'build/pages/home/home.html',
  providers:[GithubService]
})
export class HomePage {
	public foundRepos;
	public username;

  constructor(private github: GithubService) {
  }

  getRepos() {
  	this.github.getRepos(this.username).subscribe(
  		data => {
  			this.foundRepos = data.json();
  		},
  		err => console.error(err),
  		() => console.log('Complete')
  	);
  }
}
