function Accounts() {
    var $class = this;
    this.sqlLite = new SqlLite();
    $class.id = "";
    $class.SerialNumber = "";
    $class.Title = "";
    $class.Type = "";
    $class.Balance = 0;
    $class.BasicInfo_Name = "";
    $class.BasicInfo_Phone = "";
    $class.BasicInfo_Address = "";
    $class.OpenAccount = function (_callBack) {
        $class.sqlLite.OpenConnection();
        console.log($class.sqlLite.db);
        $class.sqlLite.db.transaction(function (tx) {
            tx.executeSql('INSERT INTO Accounts (SerialNumber,Title,Type,Balance,BasicInfo_Name,BasicInfo_Phone,BasicInfo_Address) VALUES (?,?,?,?,?,?,?)',
                [$class.SerialNumber, $class.Title, $class.Type, $class.Balance, $class.BasicInfo_Name, $class.BasicInfo_Phone, $class.BasicInfo_Address], function (tx, res) { _callBack( res); }, function (tx, err) { console.log(err) });
        });
    };
    $class.List = function (_callBack) {
        $class.sqlLite.OpenConnection();
        console.log($class.sqlLite.db);
        $class.sqlLite.db.transaction(function (tx) {
            tx.executeSql('select * from Accounts',
                [], function (tx, res) { _callBack(res); }, function (tx, err) { console.log(err) });
        });
    };
}