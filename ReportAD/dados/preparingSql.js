

exports.PreparingSql = function(){
    this.sql = '';
    this.add = function(){
        if(this.sql != '') this.sql += ',';
    }
    this.addString = function(str){
        this.add()
        this.sql += "'"+str+"'"
    }
    this.addNumber = function(n){
        this.add()
        this.sql += String(n)
    }
}