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

    this.Init = function () {
        $class.CheckExist(function (_exist) {
            //$class.db.transaction(function (tx) {
            //    tx.executeSql('DROP TABLE Transactions');
            //    console.log('hrer');
            //});
            //$class.db.transaction(function (tx) {
            //    tx.executeSql('DROP TABLE Accounts');
            //    console.log('hrer');
            //});
            //console.log(_exist);
            if (_exist == false) {
                $class.db.transaction(function (tx) {
                    console.log('enter');
                    tx.executeSql('CREATE TABLE IF NOT EXISTS Accounts (id integer primary key autoincrement, SerialNumber TEXT,Title TEXT,Type TEXT,Balance FLOAT,BasicInfo_Name TEXT,BasicInfo_Phone TEXT,BasicInfo_Address TEXT,BasicInfo_CreationDate Date)');
                    tx.executeSql('CREATE TABLE IF NOT EXISTS Transactions (id integer primary key autoincrement, AccountId integer,Date Date,Amount FLOAT,Balance FLOAT,Statement TEXT,FilterationTags TEXT)');
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
        $class.db.readTransaction(function (tx) {
            tx.executeSql('SELECT name FROM sqlite_master WHERE type="table" AND name="Transactions";', [], function (tx, results) {
                if (results.rows.length > 0)
                    _callback(true);
                else
                    _callback(false);
            });
        });
    };
};