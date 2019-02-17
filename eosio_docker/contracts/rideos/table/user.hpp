// @abi table user i64
TABLE user
{
    name account;
    string username;
    asset balance;

    uint64_t primary_key() const { return account.value; }
};

typedef multi_index<name("user"), user> user_table;