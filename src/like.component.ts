
export class LikeComponent{

    constructor(private _likeCount: number, private _isSelected: boolean){ }

    onClick(){
        if(this._isSelected){
          this._likeCount--;
          this._isSelected = false;
        }
        else{
          this._likeCount++;
          this._isSelected = true;
        }
    }

    display(){
      console.log('likes: ' + this._likeCount + ' , is it selected: ' + this._isSelected);
    }

    get likeCount(){
      return this._likeCount;
    }

    get isSelected(){
      return this._isSelected;
    }
}