

class Github{

  constructor(){
    this.client_id ='0f0bc2afa5ce50ae97d1'
    this.client_secret = '408f92f72ef53effc73ad9e0287a31ef72f40c98'
    this.repos_count = 5
    this.repos_sort = 'created : asc'
  }

  async getUser(user){
    const profileResponse =  await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profileData = await profileResponse.json();


    const repoResponse =  await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileRepos = await repoResponse.json();


    return{
      profile: profileData,
      repos: profileRepos

    }
  }

}
