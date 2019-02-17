//@abi table stackpower i64
TABLE stackpower
{
    uint64_t idStackPower;
    name account;
    asset balance;
    uint64_t placeKey;

    uint64_t primary_key() const { return idStackPower; }
    uint64_t get_account() const { return account.value; }
};
typedef multi_index<name("stackpower"), stackpower,
                    indexed_by<name("byaccount"),
                               const_mem_fun<stackpower, uint64_t, &stackpower::get_account>>>
    stackpower_table;