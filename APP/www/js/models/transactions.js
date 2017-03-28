function Transactions() {
    var $class = this;
    this.sqlLite = new SqlLite();
    $class.id = 0;
    $class.AccountId = "";
    $class.Date = "";
    $class.Amount = 0;
    $class.Statement = "";
    $class.Balance = 0;
    $class.FilterationTags = "";

    $class.New = function (_callBack) {
        $class.sqlLite.OpenConnection();
        $class.sqlLite.db.transaction(function (tx) {
            tx.executeSql('INSERT INTO Transactions (AccountId,Date,Amount,Statement,FilterationTags,Balance) VALUES (?,?,?,?,?,?)',
                [$class.AccountId, $class.Date, $class.Amount, $class.Statement, $class.FilterationTags, $class.Balance], function (tx, res) { _callBack(res); }, function (tx, err) { console.log(err) });
        });
    };

    $class.List = function (_callBack) {
        $class.sqlLite.OpenConnection();
        $class.sqlLite.db.transaction(function (tx) {
            tx.executeSql('select * from Transactions',
                [], function (tx, res) { _callBack(res); }, function (tx, err) { console.log(err) });
        });
    };

    $class.RemoveTransactions = function (id, _callBack) {
        $class.sqlLite.OpenConnection();
        $class.sqlLite.db.transaction(function (tx) {
            tx.executeSql('DELETE FROM Transactions WHERE id=?', [id], function (tx, res) { _callBack(res); }, function (tx, err) { console.log(tx); console.log(err) });
            alert("Delete Sucessfully");
        });
    };
};