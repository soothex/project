import { observable, decorate, action } from 'mobx';


class Store {
    @observable userName = 'testtext'
    @observable userData = null

    @action.bound
    getRandomUser() {
        fetch('https://randomuser.me/api/').then(res => res.json()).then(json => {
                if(json.results){
                    this.userData = json.results[0];
                }
            })
    }
}

export default Store;