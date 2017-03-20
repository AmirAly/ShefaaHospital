function SqlLite() {
    var $class = this;
    this.Path = "ShefaaHospitalDB";
    this.db = {};
    this.OpenConnection = function () {
        $class.db = openDatabase(this.Path, '1.0', this.Path, 65535);
    };
    this.CloseConnection = function () {
        db.close();
    };
    this.BackUp = function () { };
    this.Init = function () {
        $class.CheckExist(function (_exist) {
            console.log(_exist);
            if (_exist == false) {
                $class.db.transaction(function (tx) {
                    tx.executeSql('CREATE TABLE IF NOT EXISTS Accounts (id unique, SerialNumber STRING,Title STRING,Type STRING,Balance FLOAT,BasicInfo_Name STRING,BasicInfo_Phone STRING,BasicInfo_Address STRING)');
                    tx.executeSql('CREATE TABLE IF NOT EXISTS Transactions (id unique, AccountId STRING,Date Date,Amount FLOAT,Balance FLOAT,Statement STRING,FilterationTags STRING)');
                });
            }
        });
    };
    this.CheckExist = function (_callback) {
        $class.OpenConnection();
        $class.db.readTransaction(function (tx) {
            tx.executeSql('SELECT name FROM sqlite_master WHERE type="table" AND name="Accounts";', [], function (tx, results) {
                if (results.rows.length > 0)
                    _callback(true);
                else
                    _callback(false);
            });
        });
    };
}