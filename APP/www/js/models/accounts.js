function Accounts() {
    var $class = this;
    this.sqlLite = new SqlLite();
    $class.id = 0;
    $class.SerialNumber = "";
    $class.Title = "";
    $class.Type = "";
    $class.Balance = 0;
    $class.BasicInfo_Name = "";
    $class.BasicInfo_Phone = "";
    $class.BasicInfo_Address = "";
    $class.BasicInfo_CreationDate = "";

    $class.OpenAccount = function (_callBack) {
        $class.sqlLite.OpenConnection();
        $class.sqlLite.db.transaction(function (tx) {
            tx.executeSql('INSERT INTO Accounts (SerialNumber,Title,Type,Balance,BasicInfo_Name,BasicInfo_Phone,BasicInfo_Address,BasicInfo_CreationDate) VALUES (?,?,?,?,?,?,?,?)',
                [$class.SerialNumber, $class.Title, $class.Type, $class.Balance, $class.BasicInfo_Name, $class.BasicInfo_Phone, $class.BasicInfo_Address, $class.BasicInfo_CreationDate], function (tx, res) { _callBack(res); }, function (tx, err) { console.log(err) });
        });
    };

    $class.List = function (_callBack) {
        $class.sqlLite.OpenConnection();
        $class.sqlLite.db.transaction(function (tx) {
            tx.executeSql('select * from Accounts',
                [], function (tx, res) { _callBack(res); }, function (tx, err) { console.log(err) });
        });
    };

    $class.ListEmployee = function (_callBack) {
        $class.sqlLite.OpenConnection();
        $class.sqlLite.db.transaction(function (tx) {
            tx.executeSql('select id,BasicInfo_Name,Balance from Accounts WHERE Type="Employee"',
                [], function (tx, res) { _callBack(res); }, function (tx, err) { console.log(err) });
        });
    };

    $class.ListClients = function (_callBack) {
        $class.sqlLite.OpenConnection();
        $class.sqlLite.db.transaction(function (tx) {
            tx.executeSql('select id,BasicInfo_Name,BasicInfo_CreationDate,BasicInfo_Phone,Balance from Accounts WHERE Type="Client"',
                [], function (tx, res) { _callBack(res); }, function (tx, err) { console.log(err) });
        });
    };

    $class.GetById = function (_callBack,_id) {
        $class.sqlLite.OpenConnection();
        $class.sqlLite.db.transaction(function (tx) {
            tx.executeSql('select id,BasicInfo_Name,BasicInfo_CreationDate,BasicInfo_Phone,Balance,BasicInfo_Address from Accounts WHERE id=?',
                [_id], function (tx, res) { _callBack(res); }, function (tx, err) { console.log(err) });
        });
    };

    $class.RemoveAccount = function (id, _callBack) {
        $class.sqlLite.OpenConnection();
        $class.sqlLite.db.transaction(function (tx) {
            tx.executeSql('DELETE FROM Accounts WHERE id=?', [id], function (tx, res) { _callBack(res); }, function (tx, err) { console.log(tx); console.log(err) });
        });
    };

    $class.UpdateAccount = function (_callBack) {
        $class.sqlLite.OpenConnection();
        $class.sqlLite.db.transaction(function (tx) {
            tx.executeSql('UPDATE Accounts SET BasicInfo_Name=?,BasicInfo_Phone=?,BasicInfo_Address=?,BasicInfo_CreationDate=? WHERE id=?',
                              [ $class.BasicInfo_Name, $class.BasicInfo_Phone, $class.BasicInfo_Address, $class.BasicInfo_CreationDate,$class.id]
            , function (tx, res) { _callBack(res); }, function (tx, err) { console.log(tx); console.log(err) });

        });
    };
};