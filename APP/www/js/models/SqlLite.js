function SqlLite() {
    $class = this;
    this.Path = "ShefaaHospitalDB";
    this.db;
    this.OpenConnection = function () {
        try{
            db = openDatabase($class.Path, '1.0', $class.Path, 65535);
        }
        catch(ex)
        {
            console.log(ex);
        }
    };
    this.CloseConnection = function () {
        db.close();
    };
    //this.BackUp = function () { };
    this.Init = function () {

    };
    this.CheckExist = function () {
        $class.OpenConnection();
        console.log($class.db);
        $class.db.transaction(function (tx) {
            this.tx.executeSql('SELECT name FROM sqlite_master WHERE type="table" AND name="Accounts";', function (tx, results) {
                console.log(results);
            });
        });
    };
}