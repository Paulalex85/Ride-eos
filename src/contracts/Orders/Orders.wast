(module
 (type $FUNCSIG$vijjj (func (param i32 i64 i64 i64)))
 (type $FUNCSIG$vij (func (param i32 i64)))
 (type $FUNCSIG$viji (func (param i32 i64 i32)))
 (type $FUNCSIG$v (func))
 (type $FUNCSIG$j (func (result i64)))
 (type $FUNCSIG$vjj (func (param i64 i64)))
 (type $FUNCSIG$vii (func (param i32 i32)))
 (type $FUNCSIG$ijjjj (func (param i64 i64 i64 i64) (result i32)))
 (type $FUNCSIG$vj (func (param i64)))
 (type $FUNCSIG$viii (func (param i32 i32 i32)))
 (type $FUNCSIG$vijii (func (param i32 i64 i32 i32)))
 (type $FUNCSIG$ijjjij (func (param i64 i64 i64 i32 i64) (result i32)))
 (type $FUNCSIG$iiii (func (param i32 i32 i32) (result i32)))
 (type $FUNCSIG$i (func (result i32)))
 (type $FUNCSIG$iii (func (param i32 i32) (result i32)))
 (type $FUNCSIG$vi (func (param i32)))
 (type $FUNCSIG$ijjjii (func (param i64 i64 i64 i32 i32) (result i32)))
 (type $FUNCSIG$ijjjjii (func (param i64 i64 i64 i64 i32 i32) (result i32)))
 (type $FUNCSIG$ijjjji (func (param i64 i64 i64 i64 i32) (result i32)))
 (type $FUNCSIG$ijjj (func (param i64 i64 i64) (result i32)))
 (import "env" "abort" (func $abort))
 (import "env" "action_data_size" (func $action_data_size (result i32)))
 (import "env" "assert_sha256" (func $assert_sha256 (param i32 i32 i32)))
 (import "env" "current_receiver" (func $current_receiver (result i64)))
 (import "env" "current_time" (func $current_time (result i64)))
 (import "env" "db_end_i64" (func $db_end_i64 (param i64 i64 i64) (result i32)))
 (import "env" "db_find_i64" (func $db_find_i64 (param i64 i64 i64 i64) (result i32)))
 (import "env" "db_get_i64" (func $db_get_i64 (param i32 i32 i32) (result i32)))
 (import "env" "db_idx64_find_primary" (func $db_idx64_find_primary (param i64 i64 i64 i32 i64) (result i32)))
 (import "env" "db_idx64_lowerbound" (func $db_idx64_lowerbound (param i64 i64 i64 i32 i32) (result i32)))
 (import "env" "db_idx64_next" (func $db_idx64_next (param i32 i32) (result i32)))
 (import "env" "db_idx64_store" (func $db_idx64_store (param i64 i64 i64 i64 i32) (result i32)))
 (import "env" "db_idx64_update" (func $db_idx64_update (param i32 i64 i32)))
 (import "env" "db_lowerbound_i64" (func $db_lowerbound_i64 (param i64 i64 i64 i64) (result i32)))
 (import "env" "db_previous_i64" (func $db_previous_i64 (param i32 i32) (result i32)))
 (import "env" "db_store_i64" (func $db_store_i64 (param i64 i64 i64 i64 i32 i32) (result i32)))
 (import "env" "db_update_i64" (func $db_update_i64 (param i32 i64 i32 i32)))
 (import "env" "eosio_assert" (func $eosio_assert (param i32 i32)))
 (import "env" "memcpy" (func $memcpy (param i32 i32 i32) (result i32)))
 (import "env" "prints" (func $prints (param i32)))
 (import "env" "printui" (func $printui (param i64)))
 (import "env" "read_action_data" (func $read_action_data (param i32 i32) (result i32)))
 (import "env" "require_auth" (func $require_auth (param i64)))
 (import "env" "require_auth2" (func $require_auth2 (param i64 i64)))
 (table 11 11 anyfunc)
 (elem (i32.const 0) $__wasm_nullptr $_ZN7rideEOS6Orders12validatedeliEy $_ZN7rideEOS6Orders10initializeEyyy $_ZN7rideEOS6Orders11orderdeliveEyRK11checksum256 $_ZN7rideEOS6Orders12validatesellEyRK11checksum256 $_ZN7rideEOS6Orders10ordertakenEyRK11checksum256 $_ZN7rideEOS6Orders12productreadyEy $_ZN7rideEOS6Orders8getorderEy $_ZN7rideEOS6Orders12getorderbybuEy $_ZN7rideEOS6Orders11ordercancelEyRK11checksum256 $_ZN7rideEOS6Orders12validateinitEyRK11checksum256)
 (memory $0 1)
 (data (i32.const 4) "\a0f\00\00")
 (data (i32.const 16) "onerror\00")
 (data (i32.const 32) "eosio\00")
 (data (i32.const 48) "onerror action\'s are only valid from the \"eosio\" system account\00")
 (data (i32.const 112) "object passed to iterator_to is not in multi_index\00")
 (data (i32.const 176) "Address for order not found\00")
 (data (i32.const 208) "The order is not in the state delivery\00")
 (data (i32.const 256) "cannot pass end iterator to modify\00")
 (data (i32.const 304) "object passed to modify is not in multi_index\00")
 (data (i32.const 352) "cannot modify objects in table of another contract\00")
 (data (i32.const 416) "updater cannot change primary key when modifying an object\00")
 (data (i32.const 480) "write\00")
 (data (i32.const 496) "error reading iterator\00")
 (data (i32.const 528) "read\00")
 (data (i32.const 544) "The order is not in the state of waiting deliver\00")
 (data (i32.const 608) "The order is not in the state of product ready\00")
 (data (i32.const 656) "The order is not in the state of waiting seller\00")
 (data (i32.const 704) "The order is not in the state of initialization\00")
 (data (i32.const 752) "=== Order === \00")
 (data (i32.const 768) "- Order Key : \00")
 (data (i32.const 784) "- Buyer Key : \00")
 (data (i32.const 800) "- Seller Key : \00")
 (data (i32.const 816) "- Deliver Key : \00")
 (data (i32.const 848) "- Statut : \00")
 (data (i32.const 864) "- Date : \00")
 (data (i32.const 880) "cannot increment end iterator\00")
 (data (i32.const 912) "unable to find key\00")
 (data (i32.const 944) "=== Order === \n\00")
 (data (i32.const 960) "\n\00")
 (data (i32.const 976) "Buyer not found\00")
 (data (i32.const 992) "Seller not found\00")
 (data (i32.const 1024) "Deliver not found\00")
 (data (i32.const 1056) "cannot create objects in table of another contract\00")
 (data (i32.const 1120) "next primary key in table is at autoincrement limit\00")
 (data (i32.const 1184) "cannot decrement end iterator when the table is empty\00")
 (data (i32.const 1248) "cannot decrement iterator at beginning of table\00")
 (data (i32.const 1296) "magnitude of asset amount must be less than 2^62\00")
 (data (i32.const 1360) "invalid symbol name\00")
 (data (i32.const 1392) "get\00")
 (data (i32.const 9792) "malloc_from_freed was designed to only be called after _heap was completely allocated\00")
 (export "memory" (memory $0))
 (export "_ZeqRK11checksum256S1_" (func $_ZeqRK11checksum256S1_))
 (export "_ZeqRK11checksum160S1_" (func $_ZeqRK11checksum160S1_))
 (export "_ZneRK11checksum160S1_" (func $_ZneRK11checksum160S1_))
 (export "now" (func $now))
 (export "_ZN5eosio12require_authERKNS_16permission_levelE" (func $_ZN5eosio12require_authERKNS_16permission_levelE))
 (export "apply" (func $apply))
 (export "_ZN7rideEOS6Orders10initializeEyyy" (func $_ZN7rideEOS6Orders10initializeEyyy))
 (export "_ZN7rideEOS6Orders8getorderEy" (func $_ZN7rideEOS6Orders8getorderEy))
 (export "_ZN7rideEOS6Orders12getorderbybuEy" (func $_ZN7rideEOS6Orders12getorderbybuEy))
 (export "_ZN7rideEOS6Orders12validateinitEyRK11checksum256" (func $_ZN7rideEOS6Orders12validateinitEyRK11checksum256))
 (export "_ZN7rideEOS6Orders12validatedeliEy" (func $_ZN7rideEOS6Orders12validatedeliEy))
 (export "_ZN7rideEOS6Orders12validatesellEyRK11checksum256" (func $_ZN7rideEOS6Orders12validatesellEyRK11checksum256))
 (export "_ZN7rideEOS6Orders12productreadyEy" (func $_ZN7rideEOS6Orders12productreadyEy))
 (export "_ZN7rideEOS6Orders10ordertakenEyRK11checksum256" (func $_ZN7rideEOS6Orders10ordertakenEyRK11checksum256))
 (export "_ZN7rideEOS6Orders11orderdeliveEyRK11checksum256" (func $_ZN7rideEOS6Orders11orderdeliveEyRK11checksum256))
 (export "_ZN7rideEOS6Orders11ordercancelEyRK11checksum256" (func $_ZN7rideEOS6Orders11ordercancelEyRK11checksum256))
 (export "_ZN7rideEOS8is_equalERK11checksum256S2_" (func $_ZN7rideEOS8is_equalERK11checksum256S2_))
 (export "_ZN7rideEOS7is_zeroERK11checksum256" (func $_ZN7rideEOS7is_zeroERK11checksum256))
 (export "malloc" (func $malloc))
 (export "free" (func $free))
 (export "memcmp" (func $memcmp))
 (func $_ZeqRK11checksum256S1_ (param $0 i32) (param $1 i32) (result i32)
  (i32.eqz
   (call $memcmp
    (get_local $0)
    (get_local $1)
    (i32.const 32)
   )
  )
 )
 (func $_ZeqRK11checksum160S1_ (param $0 i32) (param $1 i32) (result i32)
  (i32.eqz
   (call $memcmp
    (get_local $0)
    (get_local $1)
    (i32.const 32)
   )
  )
 )
 (func $_ZneRK11checksum160S1_ (param $0 i32) (param $1 i32) (result i32)
  (i32.ne
   (call $memcmp
    (get_local $0)
    (get_local $1)
    (i32.const 32)
   )
   (i32.const 0)
  )
 )
 (func $now (result i32)
  (i32.wrap/i64
   (i64.div_u
    (call $current_time)
    (i64.const 1000000)
   )
  )
 )
 (func $_ZN5eosio12require_authERKNS_16permission_levelE (param $0 i32)
  (call $require_auth2
   (i64.load
    (get_local $0)
   )
   (i64.load offset=8
    (get_local $0)
   )
  )
 )
 (func $apply (param $0 i64) (param $1 i64) (param $2 i64)
  (local $3 i32)
  (local $4 i32)
  (local $5 i64)
  (local $6 i64)
  (local $7 i64)
  (local $8 i64)
  (local $9 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $9
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 176)
    )
   )
  )
  (set_local $6
   (i64.const 0)
  )
  (set_local $5
   (i64.const 59)
  )
  (set_local $4
   (i32.const 16)
  )
  (set_local $7
   (i64.const 0)
  )
  (loop $label$0
   (block $label$1
    (block $label$2
     (block $label$3
      (block $label$4
       (block $label$5
        (br_if $label$5
         (i64.gt_u
          (get_local $6)
          (i64.const 6)
         )
        )
        (br_if $label$4
         (i32.gt_u
          (i32.and
           (i32.add
            (tee_local $3
             (i32.load8_s
              (get_local $4)
             )
            )
            (i32.const -97)
           )
           (i32.const 255)
          )
          (i32.const 25)
         )
        )
        (set_local $3
         (i32.add
          (get_local $3)
          (i32.const 165)
         )
        )
        (br $label$3)
       )
       (set_local $8
        (i64.const 0)
       )
       (br_if $label$2
        (i64.le_u
         (get_local $6)
         (i64.const 11)
        )
       )
       (br $label$1)
      )
      (set_local $3
       (select
        (i32.add
         (get_local $3)
         (i32.const 208)
        )
        (i32.const 0)
        (i32.lt_u
         (i32.and
          (i32.add
           (get_local $3)
           (i32.const -49)
          )
          (i32.const 255)
         )
         (i32.const 5)
        )
       )
      )
     )
     (set_local $8
      (i64.shr_s
       (i64.shl
        (i64.extend_u/i32
         (get_local $3)
        )
        (i64.const 56)
       )
       (i64.const 56)
      )
     )
    )
    (set_local $8
     (i64.shl
      (i64.and
       (get_local $8)
       (i64.const 31)
      )
      (i64.and
       (get_local $5)
       (i64.const 4294967295)
      )
     )
    )
   )
   (set_local $4
    (i32.add
     (get_local $4)
     (i32.const 1)
    )
   )
   (set_local $6
    (i64.add
     (get_local $6)
     (i64.const 1)
    )
   )
   (set_local $7
    (i64.or
     (get_local $8)
     (get_local $7)
    )
   )
   (br_if $label$0
    (i64.ne
     (tee_local $5
      (i64.add
       (get_local $5)
       (i64.const -5)
      )
     )
     (i64.const -6)
    )
   )
  )
  (block $label$6
   (br_if $label$6
    (i64.ne
     (get_local $7)
     (get_local $2)
    )
   )
   (set_local $6
    (i64.const 0)
   )
   (set_local $5
    (i64.const 59)
   )
   (set_local $4
    (i32.const 32)
   )
   (set_local $7
    (i64.const 0)
   )
   (loop $label$7
    (block $label$8
     (block $label$9
      (block $label$10
       (block $label$11
        (block $label$12
         (br_if $label$12
          (i64.gt_u
           (get_local $6)
           (i64.const 4)
          )
         )
         (br_if $label$11
          (i32.gt_u
           (i32.and
            (i32.add
             (tee_local $3
              (i32.load8_s
               (get_local $4)
              )
             )
             (i32.const -97)
            )
            (i32.const 255)
           )
           (i32.const 25)
          )
         )
         (set_local $3
          (i32.add
           (get_local $3)
           (i32.const 165)
          )
         )
         (br $label$10)
        )
        (set_local $8
         (i64.const 0)
        )
        (br_if $label$9
         (i64.le_u
          (get_local $6)
          (i64.const 11)
         )
        )
        (br $label$8)
       )
       (set_local $3
        (select
         (i32.add
          (get_local $3)
          (i32.const 208)
         )
         (i32.const 0)
         (i32.lt_u
          (i32.and
           (i32.add
            (get_local $3)
            (i32.const -49)
           )
           (i32.const 255)
          )
          (i32.const 5)
         )
        )
       )
      )
      (set_local $8
       (i64.shr_s
        (i64.shl
         (i64.extend_u/i32
          (get_local $3)
         )
         (i64.const 56)
        )
        (i64.const 56)
       )
      )
     )
     (set_local $8
      (i64.shl
       (i64.and
        (get_local $8)
        (i64.const 31)
       )
       (i64.and
        (get_local $5)
        (i64.const 4294967295)
       )
      )
     )
    )
    (set_local $4
     (i32.add
      (get_local $4)
      (i32.const 1)
     )
    )
    (set_local $6
     (i64.add
      (get_local $6)
      (i64.const 1)
     )
    )
    (set_local $7
     (i64.or
      (get_local $8)
      (get_local $7)
     )
    )
    (br_if $label$7
     (i64.ne
      (tee_local $5
       (i64.add
        (get_local $5)
        (i64.const -5)
       )
      )
      (i64.const -6)
     )
    )
   )
   (call $eosio_assert
    (i64.eq
     (get_local $7)
     (get_local $1)
    )
    (i32.const 48)
   )
  )
  (block $label$13
   (block $label$14
    (br_if $label$14
     (i64.eq
      (get_local $1)
      (get_local $0)
     )
    )
    (set_local $6
     (i64.const 0)
    )
    (set_local $5
     (i64.const 59)
    )
    (set_local $4
     (i32.const 16)
    )
    (set_local $7
     (i64.const 0)
    )
    (loop $label$15
     (block $label$16
      (block $label$17
       (block $label$18
        (block $label$19
         (block $label$20
          (br_if $label$20
           (i64.gt_u
            (get_local $6)
            (i64.const 6)
           )
          )
          (br_if $label$19
           (i32.gt_u
            (i32.and
             (i32.add
              (tee_local $3
               (i32.load8_s
                (get_local $4)
               )
              )
              (i32.const -97)
             )
             (i32.const 255)
            )
            (i32.const 25)
           )
          )
          (set_local $3
           (i32.add
            (get_local $3)
            (i32.const 165)
           )
          )
          (br $label$18)
         )
         (set_local $8
          (i64.const 0)
         )
         (br_if $label$17
          (i64.le_u
           (get_local $6)
           (i64.const 11)
          )
         )
         (br $label$16)
        )
        (set_local $3
         (select
          (i32.add
           (get_local $3)
           (i32.const 208)
          )
          (i32.const 0)
          (i32.lt_u
           (i32.and
            (i32.add
             (get_local $3)
             (i32.const -49)
            )
            (i32.const 255)
           )
           (i32.const 5)
          )
         )
        )
       )
       (set_local $8
        (i64.shr_s
         (i64.shl
          (i64.extend_u/i32
           (get_local $3)
          )
          (i64.const 56)
         )
         (i64.const 56)
        )
       )
      )
      (set_local $8
       (i64.shl
        (i64.and
         (get_local $8)
         (i64.const 31)
        )
        (i64.and
         (get_local $5)
         (i64.const 4294967295)
        )
       )
      )
     )
     (set_local $4
      (i32.add
       (get_local $4)
       (i32.const 1)
      )
     )
     (set_local $6
      (i64.add
       (get_local $6)
       (i64.const 1)
      )
     )
     (set_local $7
      (i64.or
       (get_local $8)
       (get_local $7)
      )
     )
     (br_if $label$15
      (i64.ne
       (tee_local $5
        (i64.add
         (get_local $5)
         (i64.const -5)
        )
       )
       (i64.const -6)
      )
     )
    )
    (br_if $label$13
     (i64.ne
      (get_local $7)
      (get_local $2)
     )
    )
   )
   (i64.store offset=168
    (get_local $9)
    (get_local $0)
   )
   (block $label$21
    (block $label$22
     (block $label$23
      (block $label$24
       (block $label$25
        (block $label$26
         (block $label$27
          (block $label$28
           (block $label$29
            (br_if $label$29
             (i64.gt_s
              (get_local $2)
              (i64.const -2764395866168697457)
             )
            )
            (br_if $label$28
             (i64.le_s
              (get_local $2)
              (i64.const -6497942313106096129)
             )
            )
            (br_if $label$26
             (i64.eq
              (get_local $2)
              (i64.const -6497942313106096128)
             )
            )
            (br_if $label$25
             (i64.eq
              (get_local $2)
              (i64.const -5915305335973637152)
             )
            )
            (br_if $label$13
             (i64.ne
              (get_local $2)
              (i64.const -2764395866171464992)
             )
            )
            (i32.store offset=132
             (get_local $9)
             (i32.const 0)
            )
            (i32.store offset=128
             (get_local $9)
             (i32.const 1)
            )
            (i64.store offset=40 align=4
             (get_local $9)
             (i64.load offset=128
              (get_local $9)
             )
            )
            (drop
             (call $_ZN5eosio14execute_actionIN7rideEOS6OrdersES2_JyEEEbPT_MT0_FvDpT1_E
              (i32.add
               (get_local $9)
               (i32.const 168)
              )
              (i32.add
               (get_local $9)
               (i32.const 40)
              )
             )
            )
            (br $label$13)
           )
           (br_if $label$27
            (i64.le_s
             (get_local $2)
             (i64.const 7112111410049449983)
            )
           )
           (br_if $label$24
            (i64.eq
             (get_local $2)
             (i64.const 7112111410049449984)
            )
           )
           (br_if $label$23
            (i64.eq
             (get_local $2)
             (i64.const 7112111410053615520)
            )
           )
           (br_if $label$13
            (i64.ne
             (get_local $2)
             (i64.const 8421053016965808128)
            )
           )
           (i32.store offset=164
            (get_local $9)
            (i32.const 0)
           )
           (i32.store offset=160
            (get_local $9)
            (i32.const 2)
           )
           (i64.store offset=8 align=4
            (get_local $9)
            (i64.load offset=160
             (get_local $9)
            )
           )
           (drop
            (call $_ZN5eosio14execute_actionIN7rideEOS6OrdersES2_JyyyEEEbPT_MT0_FvDpT1_E
             (i32.add
              (get_local $9)
              (i32.const 168)
             )
             (i32.add
              (get_local $9)
              (i32.const 8)
             )
            )
           )
           (br $label$13)
          )
          (br_if $label$22
           (i64.eq
            (get_local $2)
            (i64.const -6497942605114727936)
           )
          )
          (br_if $label$13
           (i64.ne
            (get_local $2)
            (i64.const -6497942585817508864)
           )
          )
          (i32.store offset=100
           (get_local $9)
           (i32.const 0)
          )
          (i32.store offset=96
           (get_local $9)
           (i32.const 3)
          )
          (i64.store offset=72 align=4
           (get_local $9)
           (i64.load offset=96
            (get_local $9)
           )
          )
          (drop
           (call $_ZN5eosio14execute_actionIN7rideEOS6OrdersES2_JyRK11checksum256EEEbPT_MT0_FvDpT1_E
            (i32.add
             (get_local $9)
             (i32.const 168)
            )
            (i32.add
             (get_local $9)
             (i32.const 72)
            )
           )
          )
          (br $label$13)
         )
         (br_if $label$21
          (i64.eq
           (get_local $2)
           (i64.const -2764395866168697456)
          )
         )
         (br_if $label$13
          (i64.ne
           (get_local $2)
           (i64.const -2764395866163600624)
          )
         )
         (i32.store offset=124
          (get_local $9)
          (i32.const 0)
         )
         (i32.store offset=120
          (get_local $9)
          (i32.const 4)
         )
         (i64.store offset=48 align=4
          (get_local $9)
          (i64.load offset=120
           (get_local $9)
          )
         )
         (drop
          (call $_ZN5eosio14execute_actionIN7rideEOS6OrdersES2_JyRK11checksum256EEEbPT_MT0_FvDpT1_E
           (i32.add
            (get_local $9)
            (i32.const 168)
           )
           (i32.add
            (get_local $9)
            (i32.const 48)
           )
          )
         )
         (br $label$13)
        )
        (i32.store offset=108
         (get_local $9)
         (i32.const 0)
        )
        (i32.store offset=104
         (get_local $9)
         (i32.const 5)
        )
        (i64.store offset=64 align=4
         (get_local $9)
         (i64.load offset=104
          (get_local $9)
         )
        )
        (drop
         (call $_ZN5eosio14execute_actionIN7rideEOS6OrdersES2_JyRK11checksum256EEEbPT_MT0_FvDpT1_E
          (i32.add
           (get_local $9)
           (i32.const 168)
          )
          (i32.add
           (get_local $9)
           (i32.const 64)
          )
         )
        )
        (br $label$13)
       )
       (i32.store offset=116
        (get_local $9)
        (i32.const 0)
       )
       (i32.store offset=112
        (get_local $9)
        (i32.const 6)
       )
       (i64.store offset=56 align=4
        (get_local $9)
        (i64.load offset=112
         (get_local $9)
        )
       )
       (drop
        (call $_ZN5eosio14execute_actionIN7rideEOS6OrdersES2_JyEEEbPT_MT0_FvDpT1_E
         (i32.add
          (get_local $9)
          (i32.const 168)
         )
         (i32.add
          (get_local $9)
          (i32.const 56)
         )
        )
       )
       (br $label$13)
      )
      (i32.store offset=156
       (get_local $9)
       (i32.const 0)
      )
      (i32.store offset=152
       (get_local $9)
       (i32.const 7)
      )
      (i64.store offset=16 align=4
       (get_local $9)
       (i64.load offset=152
        (get_local $9)
       )
      )
      (drop
       (call $_ZN5eosio14execute_actionIN7rideEOS6OrdersES2_JyEEEbPT_MT0_FvDpT1_E
        (i32.add
         (get_local $9)
         (i32.const 168)
        )
        (i32.add
         (get_local $9)
         (i32.const 16)
        )
       )
      )
      (br $label$13)
     )
     (i32.store offset=148
      (get_local $9)
      (i32.const 0)
     )
     (i32.store offset=144
      (get_local $9)
      (i32.const 8)
     )
     (i64.store offset=24 align=4
      (get_local $9)
      (i64.load offset=144
       (get_local $9)
      )
     )
     (drop
      (call $_ZN5eosio14execute_actionIN7rideEOS6OrdersES2_JyEEEbPT_MT0_FvDpT1_E
       (i32.add
        (get_local $9)
        (i32.const 168)
       )
       (i32.add
        (get_local $9)
        (i32.const 24)
       )
      )
     )
     (br $label$13)
    )
    (i32.store offset=92
     (get_local $9)
     (i32.const 0)
    )
    (i32.store offset=88
     (get_local $9)
     (i32.const 9)
    )
    (i64.store offset=80 align=4
     (get_local $9)
     (i64.load offset=88
      (get_local $9)
     )
    )
    (drop
     (call $_ZN5eosio14execute_actionIN7rideEOS6OrdersES2_JyRK11checksum256EEEbPT_MT0_FvDpT1_E
      (i32.add
       (get_local $9)
       (i32.const 168)
      )
      (i32.add
       (get_local $9)
       (i32.const 80)
      )
     )
    )
    (br $label$13)
   )
   (i32.store offset=140
    (get_local $9)
    (i32.const 0)
   )
   (i32.store offset=136
    (get_local $9)
    (i32.const 10)
   )
   (i64.store offset=32 align=4
    (get_local $9)
    (i64.load offset=136
     (get_local $9)
    )
   )
   (drop
    (call $_ZN5eosio14execute_actionIN7rideEOS6OrdersES2_JyRK11checksum256EEEbPT_MT0_FvDpT1_E
     (i32.add
      (get_local $9)
      (i32.const 168)
     )
     (i32.add
      (get_local $9)
      (i32.const 32)
     )
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $9)
    (i32.const 176)
   )
  )
 )
 (func $_ZN7rideEOS6Orders10initializeEyyy (type $FUNCSIG$vijjj) (param $0 i32) (param $1 i64) (param $2 i64) (param $3 i64)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $7
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 240)
    )
   )
  )
  (i64.store offset=192
   (get_local $7)
   (get_local $1)
  )
  (i64.store offset=184
   (get_local $7)
   (get_local $2)
  )
  (i64.store offset=176
   (get_local $7)
   (get_local $3)
  )
  (call $require_auth
   (get_local $1)
  )
  (set_local $6
   (i32.const 0)
  )
  (i32.store
   (i32.add
    (i32.add
     (get_local $7)
     (i32.const 136)
    )
    (i32.const 32)
   )
   (i32.const 0)
  )
  (i64.store offset=152
   (get_local $7)
   (i64.const -1)
  )
  (i64.store offset=160
   (get_local $7)
   (i64.const 0)
  )
  (i64.store offset=136
   (get_local $7)
   (tee_local $3
    (i64.load
     (get_local $0)
    )
   )
  )
  (i64.store offset=144
   (get_local $7)
   (get_local $3)
  )
  (i32.store8
   (i32.add
    (get_local $7)
    (i32.const 174)
   )
   (i32.const 0)
  )
  (i32.store16 offset=172
   (get_local $7)
   (i32.const 0)
  )
  (i32.store
   (i32.add
    (i32.add
     (get_local $7)
     (i32.const 96)
    )
    (i32.const 32)
   )
   (i32.const 0)
  )
  (i64.store offset=104
   (get_local $7)
   (get_local $1)
  )
  (i64.store offset=96
   (get_local $7)
   (get_local $1)
  )
  (i64.store offset=112
   (get_local $7)
   (i64.const -1)
  )
  (i64.store offset=120
   (get_local $7)
   (i64.const 0)
  )
  (set_local $0
   (i32.const 0)
  )
  (block $label$0
   (br_if $label$0
    (i32.lt_s
     (tee_local $4
      (call $db_find_i64
       (get_local $1)
       (get_local $1)
       (i64.const -3020384829779738624)
       (get_local $1)
      )
     )
     (i32.const 0)
    )
   )
   (call $eosio_assert
    (i32.eq
     (i32.load offset=40
      (tee_local $0
       (call $_ZNK5eosio11multi_indexILy15426359243929812992EN7rideEOS5Users4userEJEE31load_object_by_primary_iteratorEl
        (i32.add
         (get_local $7)
         (i32.const 96)
        )
        (get_local $4)
       )
      )
     )
     (i32.add
      (get_local $7)
      (i32.const 96)
     )
    )
    (i32.const 112)
   )
  )
  (call $eosio_assert
   (i32.ne
    (get_local $0)
    (i32.const 0)
   )
   (i32.const 976)
  )
  (i32.store
   (i32.add
    (i32.add
     (get_local $7)
     (i32.const 56)
    )
    (i32.const 32)
   )
   (i32.const 0)
  )
  (i64.store offset=72
   (get_local $7)
   (i64.const -1)
  )
  (i64.store offset=80
   (get_local $7)
   (i64.const 0)
  )
  (i64.store offset=64
   (get_local $7)
   (tee_local $1
    (i64.load offset=184
     (get_local $7)
    )
   )
  )
  (i64.store offset=56
   (get_local $7)
   (get_local $1)
  )
  (block $label$1
   (br_if $label$1
    (i32.lt_s
     (tee_local $0
      (call $db_find_i64
       (get_local $1)
       (get_local $1)
       (i64.const -3020384829779738624)
       (get_local $1)
      )
     )
     (i32.const 0)
    )
   )
   (call $eosio_assert
    (i32.eq
     (i32.load offset=40
      (tee_local $6
       (call $_ZNK5eosio11multi_indexILy15426359243929812992EN7rideEOS5Users4userEJEE31load_object_by_primary_iteratorEl
        (i32.add
         (get_local $7)
         (i32.const 56)
        )
        (get_local $0)
       )
      )
     )
     (i32.add
      (get_local $7)
      (i32.const 56)
     )
    )
    (i32.const 112)
   )
  )
  (call $eosio_assert
   (i32.ne
    (get_local $6)
    (i32.const 0)
   )
   (i32.const 992)
  )
  (i32.store
   (i32.add
    (i32.add
     (get_local $7)
     (i32.const 16)
    )
    (i32.const 32)
   )
   (i32.const 0)
  )
  (i64.store offset=32
   (get_local $7)
   (i64.const -1)
  )
  (i64.store offset=40
   (get_local $7)
   (i64.const 0)
  )
  (i64.store offset=24
   (get_local $7)
   (tee_local $1
    (i64.load offset=176
     (get_local $7)
    )
   )
  )
  (i64.store offset=16
   (get_local $7)
   (get_local $1)
  )
  (set_local $6
   (i32.const 0)
  )
  (block $label$2
   (br_if $label$2
    (i32.lt_s
     (tee_local $0
      (call $db_find_i64
       (get_local $1)
       (get_local $1)
       (i64.const -3020384829779738624)
       (get_local $1)
      )
     )
     (i32.const 0)
    )
   )
   (call $eosio_assert
    (i32.eq
     (i32.load offset=40
      (call $_ZNK5eosio11multi_indexILy15426359243929812992EN7rideEOS5Users4userEJEE31load_object_by_primary_iteratorEl
       (i32.add
        (get_local $7)
        (i32.const 16)
       )
       (get_local $0)
      )
     )
     (i32.add
      (get_local $7)
      (i32.const 16)
     )
    )
    (i32.const 112)
   )
   (set_local $6
    (i32.const 1)
   )
  )
  (call $eosio_assert
   (get_local $6)
   (i32.const 1024)
  )
  (set_local $1
   (i64.load offset=192
    (get_local $7)
   )
  )
  (i32.store offset=4
   (get_local $7)
   (i32.add
    (get_local $7)
    (i32.const 192)
   )
  )
  (i32.store
   (get_local $7)
   (i32.add
    (get_local $7)
    (i32.const 136)
   )
  )
  (i32.store offset=8
   (get_local $7)
   (i32.add
    (get_local $7)
    (i32.const 184)
   )
  )
  (i32.store offset=12
   (get_local $7)
   (i32.add
    (get_local $7)
    (i32.const 176)
   )
  )
  (i64.store offset=232
   (get_local $7)
   (get_local $1)
  )
  (call $eosio_assert
   (i64.eq
    (i64.load offset=136
     (get_local $7)
    )
    (call $current_receiver)
   )
   (i32.const 1056)
  )
  (i32.store offset=212
   (get_local $7)
   (get_local $7)
  )
  (i32.store offset=208
   (get_local $7)
   (i32.add
    (get_local $7)
    (i32.const 136)
   )
  )
  (i32.store offset=216
   (get_local $7)
   (i32.add
    (get_local $7)
    (i32.const 232)
   )
  )
  (i32.store offset=40
   (tee_local $6
    (call $_Znwj
     (i32.const 144)
    )
   )
   (i32.const 0)
  )
  (i32.store offset=112
   (get_local $6)
   (i32.add
    (get_local $7)
    (i32.const 136)
   )
  )
  (call $_ZZN5eosio11multi_indexILy11948801327611510784EN7rideEOS6Orders5orderEJNS_10indexed_byILy4580071945014837248EN5boost11multi_index13const_mem_funIS3_yXadL_ZNKS3_13get_buyer_keyEvEEEEEENS4_ILy4589353585820744704ENS7_IS3_yXadL_ZNKS3_14get_seller_keyEvEEEEEENS4_ILy4580909293892277728ENS7_IS3_yXadL_ZNKS3_15get_deliver_keyEvEEEEEEEE7emplaceIZNS2_10initializeEyyyE3$_0EENSE_14const_iteratorEyOT_ENKUlRSI_E_clINSE_4itemEEEDaSK_
   (i32.add
    (get_local $7)
    (i32.const 208)
   )
   (get_local $6)
  )
  (i32.store offset=224
   (get_local $7)
   (get_local $6)
  )
  (i64.store offset=208
   (get_local $7)
   (tee_local $1
    (i64.load
     (get_local $6)
    )
   )
  )
  (i32.store offset=204
   (get_local $7)
   (tee_local $4
    (i32.load offset=116
     (get_local $6)
    )
   )
  )
  (block $label$3
   (block $label$4
    (br_if $label$4
     (i32.ge_u
      (tee_local $0
       (i32.load
        (tee_local $5
         (i32.add
          (get_local $7)
          (i32.const 164)
         )
        )
       )
      )
      (i32.load
       (i32.add
        (i32.add
         (get_local $7)
         (i32.const 136)
        )
        (i32.const 32)
       )
      )
     )
    )
    (i64.store offset=8
     (get_local $0)
     (get_local $1)
    )
    (i32.store offset=16
     (get_local $0)
     (get_local $4)
    )
    (i32.store offset=224
     (get_local $7)
     (i32.const 0)
    )
    (i32.store
     (get_local $0)
     (get_local $6)
    )
    (i32.store
     (get_local $5)
     (i32.add
      (get_local $0)
      (i32.const 24)
     )
    )
    (br $label$3)
   )
   (call $_ZNSt3__16vectorIN5eosio11multi_indexILy11948801327611510784EN7rideEOS6Orders5orderEJNS1_10indexed_byILy4580071945014837248EN5boost11multi_index13const_mem_funIS5_yXadL_ZNKS5_13get_buyer_keyEvEEEEEENS6_ILy4589353585820744704ENS9_IS5_yXadL_ZNKS5_14get_seller_keyEvEEEEEENS6_ILy4580909293892277728ENS9_IS5_yXadL_ZNKS5_15get_deliver_keyEvEEEEEEEE8item_ptrENS_9allocatorISH_EEE24__emplace_back_slow_pathIJNS_10unique_ptrINSG_4itemENS_14default_deleteISN_EEEERyRlEEEvDpOT_
    (i32.add
     (get_local $7)
     (i32.const 160)
    )
    (i32.add
     (get_local $7)
     (i32.const 224)
    )
    (i32.add
     (get_local $7)
     (i32.const 208)
    )
    (i32.add
     (get_local $7)
     (i32.const 204)
    )
   )
  )
  (set_local $6
   (i32.load offset=224
    (get_local $7)
   )
  )
  (i32.store offset=224
   (get_local $7)
   (i32.const 0)
  )
  (block $label$5
   (br_if $label$5
    (i32.eqz
     (get_local $6)
    )
   )
   (call $_ZdlPv
    (get_local $6)
   )
  )
  (block $label$6
   (br_if $label$6
    (i32.eqz
     (tee_local $4
      (i32.load offset=40
       (get_local $7)
      )
     )
    )
   )
   (block $label$7
    (block $label$8
     (br_if $label$8
      (i32.eq
       (tee_local $6
        (i32.load
         (tee_local $5
          (i32.add
           (get_local $7)
           (i32.const 44)
          )
         )
        )
       )
       (get_local $4)
      )
     )
     (loop $label$9
      (set_local $0
       (i32.load
        (tee_local $6
         (i32.add
          (get_local $6)
          (i32.const -24)
         )
        )
       )
      )
      (i32.store
       (get_local $6)
       (i32.const 0)
      )
      (block $label$10
       (br_if $label$10
        (i32.eqz
         (get_local $0)
        )
       )
       (block $label$11
        (br_if $label$11
         (i32.eqz
          (i32.and
           (i32.load8_u offset=8
            (get_local $0)
           )
           (i32.const 1)
          )
         )
        )
        (call $_ZdlPv
         (i32.load
          (i32.add
           (get_local $0)
           (i32.const 16)
          )
         )
        )
       )
       (call $_ZdlPv
        (get_local $0)
       )
      )
      (br_if $label$9
       (i32.ne
        (get_local $4)
        (get_local $6)
       )
      )
     )
     (set_local $6
      (i32.load
       (i32.add
        (get_local $7)
        (i32.const 40)
       )
      )
     )
     (br $label$7)
    )
    (set_local $6
     (get_local $4)
    )
   )
   (i32.store
    (get_local $5)
    (get_local $4)
   )
   (call $_ZdlPv
    (get_local $6)
   )
  )
  (block $label$12
   (br_if $label$12
    (i32.eqz
     (tee_local $4
      (i32.load offset=80
       (get_local $7)
      )
     )
    )
   )
   (block $label$13
    (block $label$14
     (br_if $label$14
      (i32.eq
       (tee_local $6
        (i32.load
         (tee_local $5
          (i32.add
           (get_local $7)
           (i32.const 84)
          )
         )
        )
       )
       (get_local $4)
      )
     )
     (loop $label$15
      (set_local $0
       (i32.load
        (tee_local $6
         (i32.add
          (get_local $6)
          (i32.const -24)
         )
        )
       )
      )
      (i32.store
       (get_local $6)
       (i32.const 0)
      )
      (block $label$16
       (br_if $label$16
        (i32.eqz
         (get_local $0)
        )
       )
       (block $label$17
        (br_if $label$17
         (i32.eqz
          (i32.and
           (i32.load8_u offset=8
            (get_local $0)
           )
           (i32.const 1)
          )
         )
        )
        (call $_ZdlPv
         (i32.load
          (i32.add
           (get_local $0)
           (i32.const 16)
          )
         )
        )
       )
       (call $_ZdlPv
        (get_local $0)
       )
      )
      (br_if $label$15
       (i32.ne
        (get_local $4)
        (get_local $6)
       )
      )
     )
     (set_local $6
      (i32.load
       (i32.add
        (get_local $7)
        (i32.const 80)
       )
      )
     )
     (br $label$13)
    )
    (set_local $6
     (get_local $4)
    )
   )
   (i32.store
    (get_local $5)
    (get_local $4)
   )
   (call $_ZdlPv
    (get_local $6)
   )
  )
  (block $label$18
   (br_if $label$18
    (i32.eqz
     (tee_local $4
      (i32.load offset=120
       (get_local $7)
      )
     )
    )
   )
   (block $label$19
    (block $label$20
     (br_if $label$20
      (i32.eq
       (tee_local $6
        (i32.load
         (tee_local $5
          (i32.add
           (get_local $7)
           (i32.const 124)
          )
         )
        )
       )
       (get_local $4)
      )
     )
     (loop $label$21
      (set_local $0
       (i32.load
        (tee_local $6
         (i32.add
          (get_local $6)
          (i32.const -24)
         )
        )
       )
      )
      (i32.store
       (get_local $6)
       (i32.const 0)
      )
      (block $label$22
       (br_if $label$22
        (i32.eqz
         (get_local $0)
        )
       )
       (block $label$23
        (br_if $label$23
         (i32.eqz
          (i32.and
           (i32.load8_u offset=8
            (get_local $0)
           )
           (i32.const 1)
          )
         )
        )
        (call $_ZdlPv
         (i32.load
          (i32.add
           (get_local $0)
           (i32.const 16)
          )
         )
        )
       )
       (call $_ZdlPv
        (get_local $0)
       )
      )
      (br_if $label$21
       (i32.ne
        (get_local $4)
        (get_local $6)
       )
      )
     )
     (set_local $6
      (i32.load
       (i32.add
        (get_local $7)
        (i32.const 120)
       )
      )
     )
     (br $label$19)
    )
    (set_local $6
     (get_local $4)
    )
   )
   (i32.store
    (get_local $5)
    (get_local $4)
   )
   (call $_ZdlPv
    (get_local $6)
   )
  )
  (block $label$24
   (br_if $label$24
    (i32.eqz
     (tee_local $4
      (i32.load offset=160
       (get_local $7)
      )
     )
    )
   )
   (block $label$25
    (block $label$26
     (br_if $label$26
      (i32.eq
       (tee_local $6
        (i32.load
         (tee_local $5
          (i32.add
           (get_local $7)
           (i32.const 164)
          )
         )
        )
       )
       (get_local $4)
      )
     )
     (loop $label$27
      (set_local $0
       (i32.load
        (tee_local $6
         (i32.add
          (get_local $6)
          (i32.const -24)
         )
        )
       )
      )
      (i32.store
       (get_local $6)
       (i32.const 0)
      )
      (block $label$28
       (br_if $label$28
        (i32.eqz
         (get_local $0)
        )
       )
       (call $_ZdlPv
        (get_local $0)
       )
      )
      (br_if $label$27
       (i32.ne
        (get_local $4)
        (get_local $6)
       )
      )
     )
     (set_local $6
      (i32.load
       (i32.add
        (get_local $7)
        (i32.const 160)
       )
      )
     )
     (br $label$25)
    )
    (set_local $6
     (get_local $4)
    )
   )
   (i32.store
    (get_local $5)
    (get_local $4)
   )
   (call $_ZdlPv
    (get_local $6)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $7)
    (i32.const 240)
   )
  )
 )
 (func $_ZN5eosio14execute_actionIN7rideEOS6OrdersES2_JyyyEEEbPT_MT0_FvDpT1_E (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i64)
  (local $4 i64)
  (local $5 i64)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (set_local $10
   (tee_local $8
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 32)
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (get_local $8)
  )
  (set_local $2
   (i32.load offset=4
    (get_local $1)
   )
  )
  (set_local $9
   (i32.load
    (get_local $1)
   )
  )
  (block $label$0
   (block $label$1
    (block $label$2
     (block $label$3
      (br_if $label$3
       (i32.eqz
        (tee_local $1
         (call $action_data_size)
        )
       )
      )
      (br_if $label$2
       (i32.lt_u
        (get_local $1)
        (i32.const 513)
       )
      )
      (set_local $8
       (call $malloc
        (get_local $1)
       )
      )
      (br $label$1)
     )
     (set_local $8
      (i32.const 0)
     )
     (br $label$0)
    )
    (i32.store offset=4
     (i32.const 0)
     (tee_local $8
      (i32.sub
       (get_local $8)
       (i32.and
        (i32.add
         (get_local $1)
         (i32.const 15)
        )
        (i32.const -16)
       )
      )
     )
    )
   )
   (drop
    (call $read_action_data
     (get_local $8)
     (get_local $1)
    )
   )
  )
  (i64.store offset=16
   (get_local $10)
   (i64.const 0)
  )
  (i64.store offset=8
   (get_local $10)
   (i64.const 0)
  )
  (i64.store offset=24
   (get_local $10)
   (i64.const 0)
  )
  (call $eosio_assert
   (i32.gt_u
    (get_local $1)
    (i32.const 7)
   )
   (i32.const 528)
  )
  (drop
   (call $memcpy
    (i32.add
     (get_local $10)
     (i32.const 8)
    )
    (get_local $8)
    (i32.const 8)
   )
  )
  (call $eosio_assert
   (i32.ne
    (tee_local $6
     (i32.and
      (get_local $1)
      (i32.const -8)
     )
    )
    (i32.const 8)
   )
   (i32.const 528)
  )
  (drop
   (call $memcpy
    (tee_local $7
     (i32.add
      (i32.add
       (get_local $10)
       (i32.const 8)
      )
      (i32.const 8)
     )
    )
    (i32.add
     (get_local $8)
     (i32.const 8)
    )
    (i32.const 8)
   )
  )
  (call $eosio_assert
   (i32.ne
    (get_local $6)
    (i32.const 16)
   )
   (i32.const 528)
  )
  (drop
   (call $memcpy
    (tee_local $6
     (i32.add
      (i32.add
       (get_local $10)
       (i32.const 8)
      )
      (i32.const 16)
     )
    )
    (i32.add
     (get_local $8)
     (i32.const 16)
    )
    (i32.const 8)
   )
  )
  (block $label$4
   (br_if $label$4
    (i32.lt_u
     (get_local $1)
     (i32.const 513)
    )
   )
   (call $free
    (get_local $8)
   )
  )
  (set_local $1
   (i32.add
    (get_local $0)
    (i32.shr_s
     (get_local $2)
     (i32.const 1)
    )
   )
  )
  (set_local $5
   (i64.load
    (get_local $6)
   )
  )
  (set_local $4
   (i64.load
    (get_local $7)
   )
  )
  (set_local $3
   (i64.load offset=8
    (get_local $10)
   )
  )
  (block $label$5
   (br_if $label$5
    (i32.eqz
     (i32.and
      (get_local $2)
      (i32.const 1)
     )
    )
   )
   (set_local $9
    (i32.load
     (i32.add
      (i32.load
       (get_local $1)
      )
      (get_local $9)
     )
    )
   )
  )
  (call_indirect (type $FUNCSIG$vijjj)
   (get_local $1)
   (get_local $3)
   (get_local $4)
   (get_local $5)
   (get_local $9)
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $10)
    (i32.const 32)
   )
  )
  (i32.const 1)
 )
 (func $_ZN7rideEOS6Orders8getorderEy (type $FUNCSIG$vij) (param $0 i32) (param $1 i64)
  (local $2 i32)
  (local $3 i64)
  (local $4 i64)
  (local $5 i64)
  (local $6 i64)
  (local $7 i64)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $10
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 48)
    )
   )
  )
  (set_local $9
   (i32.const 0)
  )
  (i32.store
   (i32.add
    (get_local $10)
    (i32.const 40)
   )
   (i32.const 0)
  )
  (i64.store offset=24
   (get_local $10)
   (i64.const -1)
  )
  (i64.store offset=32
   (get_local $10)
   (i64.const 0)
  )
  (i64.store offset=8
   (get_local $10)
   (tee_local $3
    (i64.load
     (get_local $0)
    )
   )
  )
  (i64.store offset=16
   (get_local $10)
   (get_local $3)
  )
  (i32.store8
   (i32.add
    (get_local $10)
    (i32.const 46)
   )
   (i32.const 0)
  )
  (i32.store16 offset=44
   (get_local $10)
   (i32.const 0)
  )
  (block $label$0
   (br_if $label$0
    (i32.lt_s
     (tee_local $0
      (call $db_find_i64
       (get_local $3)
       (get_local $3)
       (i64.const -6497942746098040832)
       (get_local $1)
      )
     )
     (i32.const 0)
    )
   )
   (call $eosio_assert
    (i32.eq
     (i32.load offset=112
      (call $_ZNK5eosio11multi_indexILy11948801327611510784EN7rideEOS6Orders5orderEJNS_10indexed_byILy4580071945014837248EN5boost11multi_index13const_mem_funIS3_yXadL_ZNKS3_13get_buyer_keyEvEEEEEENS4_ILy4589353585820744704ENS7_IS3_yXadL_ZNKS3_14get_seller_keyEvEEEEEENS4_ILy4580909293892277728ENS7_IS3_yXadL_ZNKS3_15get_deliver_keyEvEEEEEEEE31load_object_by_primary_iteratorEl
       (i32.add
        (get_local $10)
        (i32.const 8)
       )
       (get_local $0)
      )
     )
     (i32.add
      (get_local $10)
      (i32.const 8)
     )
    )
    (i32.const 112)
   )
   (set_local $9
    (i32.const 1)
   )
  )
  (call $eosio_assert
   (get_local $9)
   (i32.const 176)
  )
  (set_local $3
   (i64.load32_u offset=40
    (tee_local $9
     (call $_ZNK5eosio11multi_indexILy11948801327611510784EN7rideEOS6Orders5orderEJNS_10indexed_byILy4580071945014837248EN5boost11multi_index13const_mem_funIS3_yXadL_ZNKS3_13get_buyer_keyEvEEEEEENS4_ILy4589353585820744704ENS7_IS3_yXadL_ZNKS3_14get_seller_keyEvEEEEEENS4_ILy4580909293892277728ENS7_IS3_yXadL_ZNKS3_15get_deliver_keyEvEEEEEEEE3getEyPKc
      (i32.add
       (get_local $10)
       (i32.const 8)
      )
      (get_local $1)
      (i32.const 912)
     )
    )
   )
  )
  (set_local $1
   (i64.load offset=32
    (get_local $9)
   )
  )
  (set_local $4
   (i64.load offset=24
    (get_local $9)
   )
  )
  (set_local $5
   (i64.load offset=16
    (get_local $9)
   )
  )
  (set_local $6
   (i64.load offset=8
    (get_local $9)
   )
  )
  (set_local $7
   (i64.load
    (get_local $9)
   )
  )
  (call $prints
   (i32.const 944)
  )
  (call $prints
   (i32.const 768)
  )
  (call $printui
   (get_local $7)
  )
  (call $prints
   (i32.const 960)
  )
  (call $prints
   (i32.const 784)
  )
  (call $printui
   (get_local $6)
  )
  (call $prints
   (i32.const 960)
  )
  (call $prints
   (i32.const 800)
  )
  (call $printui
   (get_local $5)
  )
  (call $prints
   (i32.const 960)
  )
  (call $prints
   (i32.const 816)
  )
  (call $printui
   (get_local $4)
  )
  (call $prints
   (i32.const 960)
  )
  (call $prints
   (i32.const 848)
  )
  (call $printui
   (get_local $1)
  )
  (call $prints
   (i32.const 960)
  )
  (call $prints
   (i32.const 864)
  )
  (call $printui
   (get_local $3)
  )
  (call $prints
   (i32.const 960)
  )
  (block $label$1
   (br_if $label$1
    (i32.eqz
     (tee_local $2
      (i32.load offset=32
       (get_local $10)
      )
     )
    )
   )
   (block $label$2
    (block $label$3
     (br_if $label$3
      (i32.eq
       (tee_local $9
        (i32.load
         (tee_local $8
          (i32.add
           (get_local $10)
           (i32.const 36)
          )
         )
        )
       )
       (get_local $2)
      )
     )
     (loop $label$4
      (set_local $0
       (i32.load
        (tee_local $9
         (i32.add
          (get_local $9)
          (i32.const -24)
         )
        )
       )
      )
      (i32.store
       (get_local $9)
       (i32.const 0)
      )
      (block $label$5
       (br_if $label$5
        (i32.eqz
         (get_local $0)
        )
       )
       (call $_ZdlPv
        (get_local $0)
       )
      )
      (br_if $label$4
       (i32.ne
        (get_local $2)
        (get_local $9)
       )
      )
     )
     (set_local $9
      (i32.load
       (i32.add
        (get_local $10)
        (i32.const 32)
       )
      )
     )
     (br $label$2)
    )
    (set_local $9
     (get_local $2)
    )
   )
   (i32.store
    (get_local $8)
    (get_local $2)
   )
   (call $_ZdlPv
    (get_local $9)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $10)
    (i32.const 48)
   )
  )
 )
 (func $_ZN5eosio14execute_actionIN7rideEOS6OrdersES2_JyEEEbPT_MT0_FvDpT1_E (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i64)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (set_local $6
   (tee_local $4
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 16)
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (get_local $4)
  )
  (set_local $2
   (i32.load offset=4
    (get_local $1)
   )
  )
  (set_local $5
   (i32.load
    (get_local $1)
   )
  )
  (block $label$0
   (block $label$1
    (block $label$2
     (block $label$3
      (br_if $label$3
       (i32.eqz
        (tee_local $1
         (call $action_data_size)
        )
       )
      )
      (br_if $label$2
       (i32.lt_u
        (get_local $1)
        (i32.const 513)
       )
      )
      (set_local $4
       (call $malloc
        (get_local $1)
       )
      )
      (br $label$1)
     )
     (set_local $4
      (i32.const 0)
     )
     (br $label$0)
    )
    (i32.store offset=4
     (i32.const 0)
     (tee_local $4
      (i32.sub
       (get_local $4)
       (i32.and
        (i32.add
         (get_local $1)
         (i32.const 15)
        )
        (i32.const -16)
       )
      )
     )
    )
   )
   (drop
    (call $read_action_data
     (get_local $4)
     (get_local $1)
    )
   )
  )
  (i64.store offset=8
   (get_local $6)
   (i64.const 0)
  )
  (call $eosio_assert
   (i32.gt_u
    (get_local $1)
    (i32.const 7)
   )
   (i32.const 528)
  )
  (drop
   (call $memcpy
    (i32.add
     (get_local $6)
     (i32.const 8)
    )
    (get_local $4)
    (i32.const 8)
   )
  )
  (set_local $3
   (i64.load offset=8
    (get_local $6)
   )
  )
  (block $label$4
   (br_if $label$4
    (i32.lt_u
     (get_local $1)
     (i32.const 513)
    )
   )
   (call $free
    (get_local $4)
   )
  )
  (set_local $1
   (i32.add
    (get_local $0)
    (i32.shr_s
     (get_local $2)
     (i32.const 1)
    )
   )
  )
  (block $label$5
   (br_if $label$5
    (i32.eqz
     (i32.and
      (get_local $2)
      (i32.const 1)
     )
    )
   )
   (set_local $5
    (i32.load
     (i32.add
      (i32.load
       (get_local $1)
      )
      (get_local $5)
     )
    )
   )
  )
  (call_indirect (type $FUNCSIG$vij)
   (get_local $1)
   (get_local $3)
   (get_local $5)
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $6)
    (i32.const 16)
   )
  )
  (i32.const 1)
 )
 (func $_ZN7rideEOS6Orders12getorderbybuEy (type $FUNCSIG$vij) (param $0 i32) (param $1 i64)
  (local $2 i32)
  (local $3 i32)
  (local $4 i64)
  (local $5 i32)
  (local $6 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $6
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 64)
    )
   )
  )
  (i32.store
   (i32.add
    (get_local $6)
    (i32.const 48)
   )
   (i32.const 0)
  )
  (i64.store offset=32
   (get_local $6)
   (i64.const -1)
  )
  (i64.store offset=40
   (get_local $6)
   (i64.const 0)
  )
  (i64.store offset=16
   (get_local $6)
   (tee_local $4
    (i64.load
     (get_local $0)
    )
   )
  )
  (i64.store offset=24
   (get_local $6)
   (get_local $4)
  )
  (i32.store8
   (i32.add
    (get_local $6)
    (i32.const 54)
   )
   (i32.const 0)
  )
  (i32.store16 offset=52
   (get_local $6)
   (i32.const 0)
  )
  (i32.store offset=8
   (get_local $6)
   (i32.add
    (get_local $6)
    (i32.const 16)
   )
  )
  (call $prints
   (i32.const 752)
  )
  (i64.store offset=56
   (get_local $6)
   (i64.const 0)
  )
  (call $_ZNK5eosio11multi_indexILy11948801327611510784EN7rideEOS6Orders5orderEJNS_10indexed_byILy4580071945014837248EN5boost11multi_index13const_mem_funIS3_yXadL_ZNKS3_13get_buyer_keyEvEEEEEENS4_ILy4589353585820744704ENS7_IS3_yXadL_ZNKS3_14get_seller_keyEvEEEEEENS4_ILy4580909293892277728ENS7_IS3_yXadL_ZNKS3_15get_deliver_keyEvEEEEEEEE5indexILy4580071945014837248ES8_Ly0ELb0EE11lower_boundERKy
   (get_local $6)
   (i32.add
    (get_local $6)
    (i32.const 8)
   )
   (i32.add
    (get_local $6)
    (i32.const 56)
   )
  )
  (block $label$0
   (br_if $label$0
    (i32.eqz
     (tee_local $0
      (i32.load offset=4
       (get_local $6)
      )
     )
    )
   )
   (loop $label$1
    (call $prints
     (i32.const 768)
    )
    (call $printui
     (i64.load
      (get_local $0)
     )
    )
    (call $prints
     (i32.const 784)
    )
    (call $printui
     (i64.load offset=8
      (get_local $0)
     )
    )
    (call $prints
     (i32.const 800)
    )
    (call $printui
     (i64.load offset=16
      (get_local $0)
     )
    )
    (call $prints
     (i32.const 816)
    )
    (call $printui
     (i64.load offset=24
      (get_local $0)
     )
    )
    (call $prints
     (i32.const 848)
    )
    (call $printui
     (i64.load offset=32
      (get_local $0)
     )
    )
    (call $prints
     (i32.const 864)
    )
    (call $printui
     (i64.load32_u offset=40
      (get_local $0)
     )
    )
    (drop
     (call $_ZN5eosio11multi_indexILy11948801327611510784EN7rideEOS6Orders5orderEJNS_10indexed_byILy4580071945014837248EN5boost11multi_index13const_mem_funIS3_yXadL_ZNKS3_13get_buyer_keyEvEEEEEENS4_ILy4589353585820744704ENS7_IS3_yXadL_ZNKS3_14get_seller_keyEvEEEEEENS4_ILy4580909293892277728ENS7_IS3_yXadL_ZNKS3_15get_deliver_keyEvEEEEEEEE5indexILy4580071945014837248ES8_Ly0ELb0EE14const_iteratorppEv
      (get_local $6)
     )
    )
    (br_if $label$1
     (tee_local $0
      (i32.load offset=4
       (get_local $6)
      )
     )
    )
   )
  )
  (block $label$2
   (br_if $label$2
    (i32.eqz
     (tee_local $2
      (i32.load offset=40
       (get_local $6)
      )
     )
    )
   )
   (block $label$3
    (block $label$4
     (br_if $label$4
      (i32.eq
       (tee_local $0
        (i32.load
         (tee_local $5
          (i32.add
           (get_local $6)
           (i32.const 44)
          )
         )
        )
       )
       (get_local $2)
      )
     )
     (loop $label$5
      (set_local $3
       (i32.load
        (tee_local $0
         (i32.add
          (get_local $0)
          (i32.const -24)
         )
        )
       )
      )
      (i32.store
       (get_local $0)
       (i32.const 0)
      )
      (block $label$6
       (br_if $label$6
        (i32.eqz
         (get_local $3)
        )
       )
       (call $_ZdlPv
        (get_local $3)
       )
      )
      (br_if $label$5
       (i32.ne
        (get_local $2)
        (get_local $0)
       )
      )
     )
     (set_local $0
      (i32.load
       (i32.add
        (get_local $6)
        (i32.const 40)
       )
      )
     )
     (br $label$3)
    )
    (set_local $0
     (get_local $2)
    )
   )
   (i32.store
    (get_local $5)
    (get_local $2)
   )
   (call $_ZdlPv
    (get_local $0)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $6)
    (i32.const 64)
   )
  )
 )
 (func $_ZN7rideEOS6Orders12validateinitEyRK11checksum256 (type $FUNCSIG$viji) (param $0 i32) (param $1 i64) (param $2 i32)
  (local $3 i32)
  (local $4 i64)
  (local $5 i32)
  (local $6 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $6
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 224)
    )
   )
  )
  (i32.store
   (i32.add
    (get_local $6)
    (i32.const 40)
   )
   (i32.const 0)
  )
  (i64.store offset=24
   (get_local $6)
   (i64.const -1)
  )
  (i64.store offset=32
   (get_local $6)
   (i64.const 0)
  )
  (i64.store offset=8
   (get_local $6)
   (tee_local $4
    (i64.load
     (get_local $0)
    )
   )
  )
  (i64.store offset=16
   (get_local $6)
   (get_local $4)
  )
  (i32.store8
   (i32.add
    (get_local $6)
    (i32.const 46)
   )
   (i32.const 0)
  )
  (i32.store16 offset=44
   (get_local $6)
   (i32.const 0)
  )
  (set_local $0
   (i32.const 0)
  )
  (block $label$0
   (br_if $label$0
    (i32.lt_s
     (tee_local $3
      (call $db_find_i64
       (get_local $4)
       (get_local $4)
       (i64.const -6497942746098040832)
       (get_local $1)
      )
     )
     (i32.const 0)
    )
   )
   (call $eosio_assert
    (i32.eq
     (i32.load offset=112
      (tee_local $0
       (call $_ZNK5eosio11multi_indexILy11948801327611510784EN7rideEOS6Orders5orderEJNS_10indexed_byILy4580071945014837248EN5boost11multi_index13const_mem_funIS3_yXadL_ZNKS3_13get_buyer_keyEvEEEEEENS4_ILy4589353585820744704ENS7_IS3_yXadL_ZNKS3_14get_seller_keyEvEEEEEENS4_ILy4580909293892277728ENS7_IS3_yXadL_ZNKS3_15get_deliver_keyEvEEEEEEEE31load_object_by_primary_iteratorEl
        (i32.add
         (get_local $6)
         (i32.const 8)
        )
        (get_local $3)
       )
      )
     )
     (i32.add
      (get_local $6)
      (i32.const 8)
     )
    )
    (i32.const 112)
   )
  )
  (call $eosio_assert
   (tee_local $5
    (i32.ne
     (get_local $0)
     (i32.const 0)
    )
   )
   (i32.const 176)
  )
  (call $require_auth
   (i64.load
    (tee_local $3
     (i32.add
      (get_local $0)
      (i32.const 8)
     )
    )
   )
  )
  (call $eosio_assert
   (i64.eqz
    (i64.load offset=32
     (get_local $0)
    )
   )
   (i32.const 704)
  )
  (set_local $4
   (i64.load
    (get_local $3)
   )
  )
  (call $eosio_assert
   (get_local $5)
   (i32.const 256)
  )
  (call $eosio_assert
   (i32.eq
    (i32.load offset=112
     (get_local $0)
    )
    (i32.add
     (get_local $6)
     (i32.const 8)
    )
   )
   (i32.const 304)
  )
  (call $eosio_assert
   (i64.eq
    (i64.load offset=8
     (get_local $6)
    )
    (call $current_receiver)
   )
   (i32.const 352)
  )
  (i64.store offset=184
   (get_local $6)
   (i64.load
    (get_local $3)
   )
  )
  (i64.store offset=192
   (get_local $6)
   (i64.load
    (i32.add
     (get_local $0)
     (i32.const 16)
    )
   )
  )
  (i64.store offset=200
   (get_local $6)
   (i64.load
    (i32.add
     (get_local $0)
     (i32.const 24)
    )
   )
  )
  (set_local $1
   (i64.load
    (get_local $0)
   )
  )
  (i64.store offset=32
   (get_local $0)
   (i64.const 1)
  )
  (i64.store
   (i32.add
    (get_local $0)
    (i32.const 104)
   )
   (i64.load
    (i32.add
     (get_local $2)
     (i32.const 24)
    )
   )
  )
  (i64.store
   (i32.add
    (get_local $0)
    (i32.const 96)
   )
   (i64.load
    (i32.add
     (get_local $2)
     (i32.const 16)
    )
   )
  )
  (i64.store
   (i32.add
    (get_local $0)
    (i32.const 88)
   )
   (i64.load
    (i32.add
     (get_local $2)
     (i32.const 8)
    )
   )
  )
  (i64.store offset=80
   (get_local $0)
   (i64.load
    (get_local $2)
   )
  )
  (call $eosio_assert
   (i32.const 1)
   (i32.const 416)
  )
  (i32.store offset=176
   (get_local $6)
   (i32.add
    (i32.add
     (get_local $6)
     (i32.const 48)
    )
    (i32.const 108)
   )
  )
  (i32.store offset=172
   (get_local $6)
   (i32.add
    (get_local $6)
    (i32.const 48)
   )
  )
  (i32.store offset=168
   (get_local $6)
   (i32.add
    (get_local $6)
    (i32.const 48)
   )
  )
  (drop
   (call $_ZN7rideEOSlsIN5eosio10datastreamIPcEEEERT_S6_RKNS_6Orders5orderE
    (i32.add
     (get_local $6)
     (i32.const 168)
    )
    (get_local $0)
   )
  )
  (call $db_update_i64
   (i32.load offset=116
    (get_local $0)
   )
   (get_local $4)
   (i32.add
    (get_local $6)
    (i32.const 48)
   )
   (i32.const 108)
  )
  (block $label$1
   (br_if $label$1
    (i64.lt_u
     (get_local $1)
     (i64.load
      (tee_local $2
       (i32.add
        (i32.add
         (get_local $6)
         (i32.const 8)
        )
        (i32.const 16)
       )
      )
     )
    )
   )
   (i64.store
    (get_local $2)
    (select
     (i64.const -2)
     (i64.add
      (get_local $1)
      (i64.const 1)
     )
     (i64.gt_u
      (get_local $1)
      (i64.const -3)
     )
    )
   )
  )
  (set_local $2
   (i32.add
    (i32.add
     (get_local $6)
     (i32.const 184)
    )
    (i32.const 8)
   )
  )
  (i64.store offset=216
   (get_local $6)
   (i64.load
    (get_local $3)
   )
  )
  (block $label$2
   (br_if $label$2
    (i32.eqz
     (call $memcmp
      (i32.add
       (get_local $6)
       (i32.const 184)
      )
      (i32.add
       (get_local $6)
       (i32.const 216)
      )
      (i32.const 8)
     )
    )
   )
   (block $label$3
    (br_if $label$3
     (i32.gt_s
      (tee_local $3
       (i32.load
        (tee_local $5
         (i32.add
          (get_local $0)
          (i32.const 120)
         )
        )
       )
      )
      (i32.const -1)
     )
    )
    (i32.store
     (get_local $5)
     (tee_local $3
      (call $db_idx64_find_primary
       (i64.load offset=8
        (get_local $6)
       )
       (i64.load
        (i32.add
         (get_local $6)
         (i32.const 16)
        )
       )
       (i64.const -6497942746098040832)
       (i32.add
        (get_local $6)
        (i32.const 208)
       )
       (get_local $1)
      )
     )
    )
   )
   (call $db_idx64_update
    (get_local $3)
    (get_local $4)
    (i32.add
     (get_local $6)
     (i32.const 216)
    )
   )
  )
  (set_local $3
   (i32.add
    (i32.add
     (get_local $6)
     (i32.const 184)
    )
    (i32.const 16)
   )
  )
  (i64.store offset=216
   (get_local $6)
   (i64.load
    (i32.add
     (get_local $0)
     (i32.const 16)
    )
   )
  )
  (block $label$4
   (br_if $label$4
    (i32.eqz
     (call $memcmp
      (get_local $2)
      (i32.add
       (get_local $6)
       (i32.const 216)
      )
      (i32.const 8)
     )
    )
   )
   (block $label$5
    (br_if $label$5
     (i32.gt_s
      (tee_local $2
       (i32.load
        (tee_local $5
         (i32.add
          (get_local $0)
          (i32.const 124)
         )
        )
       )
      )
      (i32.const -1)
     )
    )
    (i32.store
     (get_local $5)
     (tee_local $2
      (call $db_idx64_find_primary
       (i64.load offset=8
        (get_local $6)
       )
       (i64.load
        (i32.add
         (get_local $6)
         (i32.const 16)
        )
       )
       (i64.const -6497942746098040831)
       (i32.add
        (get_local $6)
        (i32.const 208)
       )
       (get_local $1)
      )
     )
    )
   )
   (call $db_idx64_update
    (get_local $2)
    (get_local $4)
    (i32.add
     (get_local $6)
     (i32.const 216)
    )
   )
  )
  (i64.store offset=216
   (get_local $6)
   (i64.load
    (i32.add
     (get_local $0)
     (i32.const 24)
    )
   )
  )
  (block $label$6
   (br_if $label$6
    (i32.eqz
     (call $memcmp
      (get_local $3)
      (i32.add
       (get_local $6)
       (i32.const 216)
      )
      (i32.const 8)
     )
    )
   )
   (block $label$7
    (br_if $label$7
     (i32.gt_s
      (tee_local $0
       (i32.load
        (tee_local $2
         (i32.add
          (get_local $0)
          (i32.const 128)
         )
        )
       )
      )
      (i32.const -1)
     )
    )
    (i32.store
     (get_local $2)
     (tee_local $0
      (call $db_idx64_find_primary
       (i64.load offset=8
        (get_local $6)
       )
       (i64.load
        (i32.add
         (get_local $6)
         (i32.const 16)
        )
       )
       (i64.const -6497942746098040830)
       (i32.add
        (get_local $6)
        (i32.const 208)
       )
       (get_local $1)
      )
     )
    )
   )
   (call $db_idx64_update
    (get_local $0)
    (get_local $4)
    (i32.add
     (get_local $6)
     (i32.const 216)
    )
   )
  )
  (block $label$8
   (br_if $label$8
    (i32.eqz
     (tee_local $3
      (i32.load offset=32
       (get_local $6)
      )
     )
    )
   )
   (block $label$9
    (block $label$10
     (br_if $label$10
      (i32.eq
       (tee_local $0
        (i32.load
         (tee_local $5
          (i32.add
           (get_local $6)
           (i32.const 36)
          )
         )
        )
       )
       (get_local $3)
      )
     )
     (loop $label$11
      (set_local $2
       (i32.load
        (tee_local $0
         (i32.add
          (get_local $0)
          (i32.const -24)
         )
        )
       )
      )
      (i32.store
       (get_local $0)
       (i32.const 0)
      )
      (block $label$12
       (br_if $label$12
        (i32.eqz
         (get_local $2)
        )
       )
       (call $_ZdlPv
        (get_local $2)
       )
      )
      (br_if $label$11
       (i32.ne
        (get_local $3)
        (get_local $0)
       )
      )
     )
     (set_local $0
      (i32.load
       (i32.add
        (get_local $6)
        (i32.const 32)
       )
      )
     )
     (br $label$9)
    )
    (set_local $0
     (get_local $3)
    )
   )
   (i32.store
    (get_local $5)
    (get_local $3)
   )
   (call $_ZdlPv
    (get_local $0)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $6)
    (i32.const 224)
   )
  )
 )
 (func $_ZN5eosio14execute_actionIN7rideEOS6OrdersES2_JyRK11checksum256EEEbPT_MT0_FvDpT1_E (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i64)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (set_local $7
   (tee_local $5
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 112)
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (get_local $5)
  )
  (set_local $2
   (i32.load offset=4
    (get_local $1)
   )
  )
  (set_local $6
   (i32.load
    (get_local $1)
   )
  )
  (block $label$0
   (block $label$1
    (block $label$2
     (block $label$3
      (br_if $label$3
       (i32.eqz
        (tee_local $3
         (call $action_data_size)
        )
       )
      )
      (br_if $label$2
       (i32.lt_u
        (get_local $3)
        (i32.const 513)
       )
      )
      (set_local $5
       (call $malloc
        (get_local $3)
       )
      )
      (br $label$1)
     )
     (set_local $5
      (i32.const 0)
     )
     (br $label$0)
    )
    (i32.store offset=4
     (i32.const 0)
     (tee_local $5
      (i32.sub
       (get_local $5)
       (i32.and
        (i32.add
         (get_local $3)
         (i32.const 15)
        )
        (i32.const -16)
       )
      )
     )
    )
   )
   (drop
    (call $read_action_data
     (get_local $5)
     (get_local $3)
    )
   )
  )
  (i64.store
   (i32.add
    (get_local $7)
    (i32.const 40)
   )
   (i64.const 0)
  )
  (i64.store
   (i32.add
    (get_local $7)
    (i32.const 32)
   )
   (i64.const 0)
  )
  (i64.store
   (i32.add
    (get_local $7)
    (i32.const 24)
   )
   (i64.const 0)
  )
  (i64.store offset=16
   (get_local $7)
   (i64.const 0)
  )
  (i64.store
   (get_local $7)
   (i64.const 0)
  )
  (call $eosio_assert
   (i32.gt_u
    (get_local $3)
    (i32.const 7)
   )
   (i32.const 528)
  )
  (drop
   (call $memcpy
    (get_local $7)
    (get_local $5)
    (i32.const 8)
   )
  )
  (call $eosio_assert
   (i32.gt_u
    (i32.add
     (get_local $3)
     (i32.const -8)
    )
    (i32.const 31)
   )
   (i32.const 528)
  )
  (drop
   (call $memcpy
    (tee_local $1
     (i32.add
      (get_local $7)
      (i32.const 16)
     )
    )
    (i32.add
     (get_local $5)
     (i32.const 8)
    )
    (i32.const 32)
   )
  )
  (block $label$4
   (br_if $label$4
    (i32.lt_u
     (get_local $3)
     (i32.const 513)
    )
   )
   (call $free
    (get_local $5)
   )
  )
  (i64.store
   (tee_local $3
    (i32.add
     (i32.add
      (get_local $7)
      (i32.const 48)
     )
     (i32.const 24)
    )
   )
   (i64.load
    (i32.add
     (get_local $1)
     (i32.const 24)
    )
   )
  )
  (i64.store
   (tee_local $5
    (i32.add
     (i32.add
      (get_local $7)
      (i32.const 48)
     )
     (i32.const 16)
    )
   )
   (i64.load
    (i32.add
     (get_local $1)
     (i32.const 16)
    )
   )
  )
  (set_local $4
   (i64.load
    (get_local $7)
   )
  )
  (i64.store offset=48
   (get_local $7)
   (i64.load
    (get_local $1)
   )
  )
  (i32.store offset=60
   (get_local $7)
   (i32.load
    (i32.add
     (get_local $1)
     (i32.const 12)
    )
   )
  )
  (i32.store offset=56
   (get_local $7)
   (i32.load
    (i32.add
     (get_local $1)
     (i32.const 8)
    )
   )
  )
  (i64.store
   (i32.add
    (i32.add
     (get_local $7)
     (i32.const 80)
    )
    (i32.const 24)
   )
   (i64.load
    (get_local $3)
   )
  )
  (i64.store
   (i32.add
    (i32.add
     (get_local $7)
     (i32.const 80)
    )
    (i32.const 16)
   )
   (i64.load
    (get_local $5)
   )
  )
  (i64.store offset=88
   (get_local $7)
   (i64.load offset=56
    (get_local $7)
   )
  )
  (i64.store offset=80
   (get_local $7)
   (i64.load offset=48
    (get_local $7)
   )
  )
  (set_local $1
   (i32.add
    (get_local $0)
    (i32.shr_s
     (get_local $2)
     (i32.const 1)
    )
   )
  )
  (block $label$5
   (br_if $label$5
    (i32.eqz
     (i32.and
      (get_local $2)
      (i32.const 1)
     )
    )
   )
   (set_local $6
    (i32.load
     (i32.add
      (i32.load
       (get_local $1)
      )
      (get_local $6)
     )
    )
   )
  )
  (call_indirect (type $FUNCSIG$viji)
   (get_local $1)
   (get_local $4)
   (i32.add
    (get_local $7)
    (i32.const 80)
   )
   (get_local $6)
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $7)
    (i32.const 112)
   )
  )
  (i32.const 1)
 )
 (func $_ZN7rideEOS6Orders12validatedeliEy (type $FUNCSIG$vij) (param $0 i32) (param $1 i64)
  (local $2 i32)
  (local $3 i32)
  (local $4 i64)
  (local $5 i32)
  (local $6 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $6
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 224)
    )
   )
  )
  (i32.store
   (i32.add
    (get_local $6)
    (i32.const 40)
   )
   (i32.const 0)
  )
  (i64.store offset=24
   (get_local $6)
   (i64.const -1)
  )
  (i64.store offset=32
   (get_local $6)
   (i64.const 0)
  )
  (i64.store offset=8
   (get_local $6)
   (tee_local $4
    (i64.load
     (get_local $0)
    )
   )
  )
  (i64.store offset=16
   (get_local $6)
   (get_local $4)
  )
  (i32.store8
   (i32.add
    (get_local $6)
    (i32.const 46)
   )
   (i32.const 0)
  )
  (i32.store16 offset=44
   (get_local $6)
   (i32.const 0)
  )
  (set_local $0
   (i32.const 0)
  )
  (block $label$0
   (br_if $label$0
    (i32.lt_s
     (tee_local $3
      (call $db_find_i64
       (get_local $4)
       (get_local $4)
       (i64.const -6497942746098040832)
       (get_local $1)
      )
     )
     (i32.const 0)
    )
   )
   (call $eosio_assert
    (i32.eq
     (i32.load offset=112
      (tee_local $0
       (call $_ZNK5eosio11multi_indexILy11948801327611510784EN7rideEOS6Orders5orderEJNS_10indexed_byILy4580071945014837248EN5boost11multi_index13const_mem_funIS3_yXadL_ZNKS3_13get_buyer_keyEvEEEEEENS4_ILy4589353585820744704ENS7_IS3_yXadL_ZNKS3_14get_seller_keyEvEEEEEENS4_ILy4580909293892277728ENS7_IS3_yXadL_ZNKS3_15get_deliver_keyEvEEEEEEEE31load_object_by_primary_iteratorEl
        (i32.add
         (get_local $6)
         (i32.const 8)
        )
        (get_local $3)
       )
      )
     )
     (i32.add
      (get_local $6)
      (i32.const 8)
     )
    )
    (i32.const 112)
   )
  )
  (call $eosio_assert
   (tee_local $2
    (i32.ne
     (get_local $0)
     (i32.const 0)
    )
   )
   (i32.const 176)
  )
  (call $require_auth
   (i64.load
    (tee_local $3
     (i32.add
      (get_local $0)
      (i32.const 24)
     )
    )
   )
  )
  (call $eosio_assert
   (i64.eq
    (i64.load offset=32
     (get_local $0)
    )
    (i64.const 1)
   )
   (i32.const 544)
  )
  (set_local $4
   (i64.load
    (get_local $3)
   )
  )
  (call $eosio_assert
   (get_local $2)
   (i32.const 256)
  )
  (call $eosio_assert
   (i32.eq
    (i32.load offset=112
     (get_local $0)
    )
    (i32.add
     (get_local $6)
     (i32.const 8)
    )
   )
   (i32.const 304)
  )
  (call $eosio_assert
   (i64.eq
    (i64.load offset=8
     (get_local $6)
    )
    (call $current_receiver)
   )
   (i32.const 352)
  )
  (i64.store offset=184
   (get_local $6)
   (i64.load
    (tee_local $2
     (i32.add
      (get_local $0)
      (i32.const 8)
     )
    )
   )
  )
  (i64.store offset=192
   (get_local $6)
   (i64.load
    (i32.add
     (get_local $0)
     (i32.const 16)
    )
   )
  )
  (i64.store offset=200
   (get_local $6)
   (i64.load
    (get_local $3)
   )
  )
  (set_local $1
   (i64.load
    (get_local $0)
   )
  )
  (i64.store offset=32
   (get_local $0)
   (i64.const 2)
  )
  (call $eosio_assert
   (i32.const 1)
   (i32.const 416)
  )
  (i32.store offset=176
   (get_local $6)
   (i32.add
    (i32.add
     (get_local $6)
     (i32.const 48)
    )
    (i32.const 108)
   )
  )
  (i32.store offset=172
   (get_local $6)
   (i32.add
    (get_local $6)
    (i32.const 48)
   )
  )
  (i32.store offset=168
   (get_local $6)
   (i32.add
    (get_local $6)
    (i32.const 48)
   )
  )
  (drop
   (call $_ZN7rideEOSlsIN5eosio10datastreamIPcEEEERT_S6_RKNS_6Orders5orderE
    (i32.add
     (get_local $6)
     (i32.const 168)
    )
    (get_local $0)
   )
  )
  (call $db_update_i64
   (i32.load offset=116
    (get_local $0)
   )
   (get_local $4)
   (i32.add
    (get_local $6)
    (i32.const 48)
   )
   (i32.const 108)
  )
  (block $label$1
   (br_if $label$1
    (i64.lt_u
     (get_local $1)
     (i64.load
      (tee_local $3
       (i32.add
        (i32.add
         (get_local $6)
         (i32.const 8)
        )
        (i32.const 16)
       )
      )
     )
    )
   )
   (i64.store
    (get_local $3)
    (select
     (i64.const -2)
     (i64.add
      (get_local $1)
      (i64.const 1)
     )
     (i64.gt_u
      (get_local $1)
      (i64.const -3)
     )
    )
   )
  )
  (set_local $3
   (i32.add
    (i32.add
     (get_local $6)
     (i32.const 184)
    )
    (i32.const 8)
   )
  )
  (i64.store offset=216
   (get_local $6)
   (i64.load
    (get_local $2)
   )
  )
  (block $label$2
   (br_if $label$2
    (i32.eqz
     (call $memcmp
      (i32.add
       (get_local $6)
       (i32.const 184)
      )
      (i32.add
       (get_local $6)
       (i32.const 216)
      )
      (i32.const 8)
     )
    )
   )
   (block $label$3
    (br_if $label$3
     (i32.gt_s
      (tee_local $2
       (i32.load
        (tee_local $5
         (i32.add
          (get_local $0)
          (i32.const 120)
         )
        )
       )
      )
      (i32.const -1)
     )
    )
    (i32.store
     (get_local $5)
     (tee_local $2
      (call $db_idx64_find_primary
       (i64.load offset=8
        (get_local $6)
       )
       (i64.load
        (i32.add
         (get_local $6)
         (i32.const 16)
        )
       )
       (i64.const -6497942746098040832)
       (i32.add
        (get_local $6)
        (i32.const 208)
       )
       (get_local $1)
      )
     )
    )
   )
   (call $db_idx64_update
    (get_local $2)
    (get_local $4)
    (i32.add
     (get_local $6)
     (i32.const 216)
    )
   )
  )
  (set_local $2
   (i32.add
    (i32.add
     (get_local $6)
     (i32.const 184)
    )
    (i32.const 16)
   )
  )
  (i64.store offset=216
   (get_local $6)
   (i64.load
    (i32.add
     (get_local $0)
     (i32.const 16)
    )
   )
  )
  (block $label$4
   (br_if $label$4
    (i32.eqz
     (call $memcmp
      (get_local $3)
      (i32.add
       (get_local $6)
       (i32.const 216)
      )
      (i32.const 8)
     )
    )
   )
   (block $label$5
    (br_if $label$5
     (i32.gt_s
      (tee_local $3
       (i32.load
        (tee_local $5
         (i32.add
          (get_local $0)
          (i32.const 124)
         )
        )
       )
      )
      (i32.const -1)
     )
    )
    (i32.store
     (get_local $5)
     (tee_local $3
      (call $db_idx64_find_primary
       (i64.load offset=8
        (get_local $6)
       )
       (i64.load
        (i32.add
         (get_local $6)
         (i32.const 16)
        )
       )
       (i64.const -6497942746098040831)
       (i32.add
        (get_local $6)
        (i32.const 208)
       )
       (get_local $1)
      )
     )
    )
   )
   (call $db_idx64_update
    (get_local $3)
    (get_local $4)
    (i32.add
     (get_local $6)
     (i32.const 216)
    )
   )
  )
  (i64.store offset=216
   (get_local $6)
   (i64.load
    (i32.add
     (get_local $0)
     (i32.const 24)
    )
   )
  )
  (block $label$6
   (br_if $label$6
    (i32.eqz
     (call $memcmp
      (get_local $2)
      (i32.add
       (get_local $6)
       (i32.const 216)
      )
      (i32.const 8)
     )
    )
   )
   (block $label$7
    (br_if $label$7
     (i32.gt_s
      (tee_local $0
       (i32.load
        (tee_local $3
         (i32.add
          (get_local $0)
          (i32.const 128)
         )
        )
       )
      )
      (i32.const -1)
     )
    )
    (i32.store
     (get_local $3)
     (tee_local $0
      (call $db_idx64_find_primary
       (i64.load offset=8
        (get_local $6)
       )
       (i64.load
        (i32.add
         (get_local $6)
         (i32.const 16)
        )
       )
       (i64.const -6497942746098040830)
       (i32.add
        (get_local $6)
        (i32.const 208)
       )
       (get_local $1)
      )
     )
    )
   )
   (call $db_idx64_update
    (get_local $0)
    (get_local $4)
    (i32.add
     (get_local $6)
     (i32.const 216)
    )
   )
  )
  (block $label$8
   (br_if $label$8
    (i32.eqz
     (tee_local $2
      (i32.load offset=32
       (get_local $6)
      )
     )
    )
   )
   (block $label$9
    (block $label$10
     (br_if $label$10
      (i32.eq
       (tee_local $0
        (i32.load
         (tee_local $5
          (i32.add
           (get_local $6)
           (i32.const 36)
          )
         )
        )
       )
       (get_local $2)
      )
     )
     (loop $label$11
      (set_local $3
       (i32.load
        (tee_local $0
         (i32.add
          (get_local $0)
          (i32.const -24)
         )
        )
       )
      )
      (i32.store
       (get_local $0)
       (i32.const 0)
      )
      (block $label$12
       (br_if $label$12
        (i32.eqz
         (get_local $3)
        )
       )
       (call $_ZdlPv
        (get_local $3)
       )
      )
      (br_if $label$11
       (i32.ne
        (get_local $2)
        (get_local $0)
       )
      )
     )
     (set_local $0
      (i32.load
       (i32.add
        (get_local $6)
        (i32.const 32)
       )
      )
     )
     (br $label$9)
    )
    (set_local $0
     (get_local $2)
    )
   )
   (i32.store
    (get_local $5)
    (get_local $2)
   )
   (call $_ZdlPv
    (get_local $0)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $6)
    (i32.const 224)
   )
  )
 )
 (func $_ZN7rideEOS6Orders12validatesellEyRK11checksum256 (type $FUNCSIG$viji) (param $0 i32) (param $1 i64) (param $2 i32)
  (local $3 i32)
  (local $4 i64)
  (local $5 i32)
  (local $6 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $6
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 224)
    )
   )
  )
  (i32.store
   (i32.add
    (get_local $6)
    (i32.const 40)
   )
   (i32.const 0)
  )
  (i64.store offset=24
   (get_local $6)
   (i64.const -1)
  )
  (i64.store offset=32
   (get_local $6)
   (i64.const 0)
  )
  (i64.store offset=8
   (get_local $6)
   (tee_local $4
    (i64.load
     (get_local $0)
    )
   )
  )
  (i64.store offset=16
   (get_local $6)
   (get_local $4)
  )
  (i32.store8
   (i32.add
    (get_local $6)
    (i32.const 46)
   )
   (i32.const 0)
  )
  (i32.store16 offset=44
   (get_local $6)
   (i32.const 0)
  )
  (set_local $0
   (i32.const 0)
  )
  (block $label$0
   (br_if $label$0
    (i32.lt_s
     (tee_local $3
      (call $db_find_i64
       (get_local $4)
       (get_local $4)
       (i64.const -6497942746098040832)
       (get_local $1)
      )
     )
     (i32.const 0)
    )
   )
   (call $eosio_assert
    (i32.eq
     (i32.load offset=112
      (tee_local $0
       (call $_ZNK5eosio11multi_indexILy11948801327611510784EN7rideEOS6Orders5orderEJNS_10indexed_byILy4580071945014837248EN5boost11multi_index13const_mem_funIS3_yXadL_ZNKS3_13get_buyer_keyEvEEEEEENS4_ILy4589353585820744704ENS7_IS3_yXadL_ZNKS3_14get_seller_keyEvEEEEEENS4_ILy4580909293892277728ENS7_IS3_yXadL_ZNKS3_15get_deliver_keyEvEEEEEEEE31load_object_by_primary_iteratorEl
        (i32.add
         (get_local $6)
         (i32.const 8)
        )
        (get_local $3)
       )
      )
     )
     (i32.add
      (get_local $6)
      (i32.const 8)
     )
    )
    (i32.const 112)
   )
  )
  (call $eosio_assert
   (tee_local $5
    (i32.ne
     (get_local $0)
     (i32.const 0)
    )
   )
   (i32.const 176)
  )
  (call $require_auth
   (i64.load
    (tee_local $3
     (i32.add
      (get_local $0)
      (i32.const 16)
     )
    )
   )
  )
  (call $eosio_assert
   (i64.eq
    (i64.load offset=32
     (get_local $0)
    )
    (i64.const 2)
   )
   (i32.const 656)
  )
  (set_local $4
   (i64.load
    (get_local $3)
   )
  )
  (call $eosio_assert
   (get_local $5)
   (i32.const 256)
  )
  (call $eosio_assert
   (i32.eq
    (i32.load offset=112
     (get_local $0)
    )
    (i32.add
     (get_local $6)
     (i32.const 8)
    )
   )
   (i32.const 304)
  )
  (call $eosio_assert
   (i64.eq
    (i64.load offset=8
     (get_local $6)
    )
    (call $current_receiver)
   )
   (i32.const 352)
  )
  (i64.store offset=184
   (get_local $6)
   (i64.load
    (tee_local $5
     (i32.add
      (get_local $0)
      (i32.const 8)
     )
    )
   )
  )
  (i64.store offset=192
   (get_local $6)
   (i64.load
    (get_local $3)
   )
  )
  (i64.store offset=200
   (get_local $6)
   (i64.load
    (i32.add
     (get_local $0)
     (i32.const 24)
    )
   )
  )
  (set_local $1
   (i64.load
    (get_local $0)
   )
  )
  (i64.store offset=32
   (get_local $0)
   (i64.const 3)
  )
  (i64.store
   (i32.add
    (get_local $0)
    (i32.const 72)
   )
   (i64.load
    (i32.add
     (get_local $2)
     (i32.const 24)
    )
   )
  )
  (i64.store
   (i32.add
    (get_local $0)
    (i32.const 64)
   )
   (i64.load
    (i32.add
     (get_local $2)
     (i32.const 16)
    )
   )
  )
  (i64.store
   (i32.add
    (get_local $0)
    (i32.const 56)
   )
   (i64.load
    (i32.add
     (get_local $2)
     (i32.const 8)
    )
   )
  )
  (i64.store offset=48
   (get_local $0)
   (i64.load
    (get_local $2)
   )
  )
  (call $eosio_assert
   (i32.const 1)
   (i32.const 416)
  )
  (i32.store offset=176
   (get_local $6)
   (i32.add
    (i32.add
     (get_local $6)
     (i32.const 48)
    )
    (i32.const 108)
   )
  )
  (i32.store offset=172
   (get_local $6)
   (i32.add
    (get_local $6)
    (i32.const 48)
   )
  )
  (i32.store offset=168
   (get_local $6)
   (i32.add
    (get_local $6)
    (i32.const 48)
   )
  )
  (drop
   (call $_ZN7rideEOSlsIN5eosio10datastreamIPcEEEERT_S6_RKNS_6Orders5orderE
    (i32.add
     (get_local $6)
     (i32.const 168)
    )
    (get_local $0)
   )
  )
  (call $db_update_i64
   (i32.load offset=116
    (get_local $0)
   )
   (get_local $4)
   (i32.add
    (get_local $6)
    (i32.const 48)
   )
   (i32.const 108)
  )
  (block $label$1
   (br_if $label$1
    (i64.lt_u
     (get_local $1)
     (i64.load
      (tee_local $2
       (i32.add
        (i32.add
         (get_local $6)
         (i32.const 8)
        )
        (i32.const 16)
       )
      )
     )
    )
   )
   (i64.store
    (get_local $2)
    (select
     (i64.const -2)
     (i64.add
      (get_local $1)
      (i64.const 1)
     )
     (i64.gt_u
      (get_local $1)
      (i64.const -3)
     )
    )
   )
  )
  (set_local $2
   (i32.add
    (i32.add
     (get_local $6)
     (i32.const 184)
    )
    (i32.const 8)
   )
  )
  (i64.store offset=216
   (get_local $6)
   (i64.load
    (get_local $5)
   )
  )
  (block $label$2
   (br_if $label$2
    (i32.eqz
     (call $memcmp
      (i32.add
       (get_local $6)
       (i32.const 184)
      )
      (i32.add
       (get_local $6)
       (i32.const 216)
      )
      (i32.const 8)
     )
    )
   )
   (block $label$3
    (br_if $label$3
     (i32.gt_s
      (tee_local $3
       (i32.load
        (tee_local $5
         (i32.add
          (get_local $0)
          (i32.const 120)
         )
        )
       )
      )
      (i32.const -1)
     )
    )
    (i32.store
     (get_local $5)
     (tee_local $3
      (call $db_idx64_find_primary
       (i64.load offset=8
        (get_local $6)
       )
       (i64.load
        (i32.add
         (get_local $6)
         (i32.const 16)
        )
       )
       (i64.const -6497942746098040832)
       (i32.add
        (get_local $6)
        (i32.const 208)
       )
       (get_local $1)
      )
     )
    )
   )
   (call $db_idx64_update
    (get_local $3)
    (get_local $4)
    (i32.add
     (get_local $6)
     (i32.const 216)
    )
   )
  )
  (set_local $3
   (i32.add
    (i32.add
     (get_local $6)
     (i32.const 184)
    )
    (i32.const 16)
   )
  )
  (i64.store offset=216
   (get_local $6)
   (i64.load
    (i32.add
     (get_local $0)
     (i32.const 16)
    )
   )
  )
  (block $label$4
   (br_if $label$4
    (i32.eqz
     (call $memcmp
      (get_local $2)
      (i32.add
       (get_local $6)
       (i32.const 216)
      )
      (i32.const 8)
     )
    )
   )
   (block $label$5
    (br_if $label$5
     (i32.gt_s
      (tee_local $2
       (i32.load
        (tee_local $5
         (i32.add
          (get_local $0)
          (i32.const 124)
         )
        )
       )
      )
      (i32.const -1)
     )
    )
    (i32.store
     (get_local $5)
     (tee_local $2
      (call $db_idx64_find_primary
       (i64.load offset=8
        (get_local $6)
       )
       (i64.load
        (i32.add
         (get_local $6)
         (i32.const 16)
        )
       )
       (i64.const -6497942746098040831)
       (i32.add
        (get_local $6)
        (i32.const 208)
       )
       (get_local $1)
      )
     )
    )
   )
   (call $db_idx64_update
    (get_local $2)
    (get_local $4)
    (i32.add
     (get_local $6)
     (i32.const 216)
    )
   )
  )
  (i64.store offset=216
   (get_local $6)
   (i64.load
    (i32.add
     (get_local $0)
     (i32.const 24)
    )
   )
  )
  (block $label$6
   (br_if $label$6
    (i32.eqz
     (call $memcmp
      (get_local $3)
      (i32.add
       (get_local $6)
       (i32.const 216)
      )
      (i32.const 8)
     )
    )
   )
   (block $label$7
    (br_if $label$7
     (i32.gt_s
      (tee_local $0
       (i32.load
        (tee_local $2
         (i32.add
          (get_local $0)
          (i32.const 128)
         )
        )
       )
      )
      (i32.const -1)
     )
    )
    (i32.store
     (get_local $2)
     (tee_local $0
      (call $db_idx64_find_primary
       (i64.load offset=8
        (get_local $6)
       )
       (i64.load
        (i32.add
         (get_local $6)
         (i32.const 16)
        )
       )
       (i64.const -6497942746098040830)
       (i32.add
        (get_local $6)
        (i32.const 208)
       )
       (get_local $1)
      )
     )
    )
   )
   (call $db_idx64_update
    (get_local $0)
    (get_local $4)
    (i32.add
     (get_local $6)
     (i32.const 216)
    )
   )
  )
  (block $label$8
   (br_if $label$8
    (i32.eqz
     (tee_local $3
      (i32.load offset=32
       (get_local $6)
      )
     )
    )
   )
   (block $label$9
    (block $label$10
     (br_if $label$10
      (i32.eq
       (tee_local $0
        (i32.load
         (tee_local $5
          (i32.add
           (get_local $6)
           (i32.const 36)
          )
         )
        )
       )
       (get_local $3)
      )
     )
     (loop $label$11
      (set_local $2
       (i32.load
        (tee_local $0
         (i32.add
          (get_local $0)
          (i32.const -24)
         )
        )
       )
      )
      (i32.store
       (get_local $0)
       (i32.const 0)
      )
      (block $label$12
       (br_if $label$12
        (i32.eqz
         (get_local $2)
        )
       )
       (call $_ZdlPv
        (get_local $2)
       )
      )
      (br_if $label$11
       (i32.ne
        (get_local $3)
        (get_local $0)
       )
      )
     )
     (set_local $0
      (i32.load
       (i32.add
        (get_local $6)
        (i32.const 32)
       )
      )
     )
     (br $label$9)
    )
    (set_local $0
     (get_local $3)
    )
   )
   (i32.store
    (get_local $5)
    (get_local $3)
   )
   (call $_ZdlPv
    (get_local $0)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $6)
    (i32.const 224)
   )
  )
 )
 (func $_ZN7rideEOS6Orders12productreadyEy (type $FUNCSIG$vij) (param $0 i32) (param $1 i64)
  (local $2 i32)
  (local $3 i32)
  (local $4 i64)
  (local $5 i32)
  (local $6 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $6
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 224)
    )
   )
  )
  (i32.store
   (i32.add
    (get_local $6)
    (i32.const 40)
   )
   (i32.const 0)
  )
  (i64.store offset=24
   (get_local $6)
   (i64.const -1)
  )
  (i64.store offset=32
   (get_local $6)
   (i64.const 0)
  )
  (i64.store offset=8
   (get_local $6)
   (tee_local $4
    (i64.load
     (get_local $0)
    )
   )
  )
  (i64.store offset=16
   (get_local $6)
   (get_local $4)
  )
  (i32.store8
   (i32.add
    (get_local $6)
    (i32.const 46)
   )
   (i32.const 0)
  )
  (i32.store16 offset=44
   (get_local $6)
   (i32.const 0)
  )
  (set_local $0
   (i32.const 0)
  )
  (block $label$0
   (br_if $label$0
    (i32.lt_s
     (tee_local $3
      (call $db_find_i64
       (get_local $4)
       (get_local $4)
       (i64.const -6497942746098040832)
       (get_local $1)
      )
     )
     (i32.const 0)
    )
   )
   (call $eosio_assert
    (i32.eq
     (i32.load offset=112
      (tee_local $0
       (call $_ZNK5eosio11multi_indexILy11948801327611510784EN7rideEOS6Orders5orderEJNS_10indexed_byILy4580071945014837248EN5boost11multi_index13const_mem_funIS3_yXadL_ZNKS3_13get_buyer_keyEvEEEEEENS4_ILy4589353585820744704ENS7_IS3_yXadL_ZNKS3_14get_seller_keyEvEEEEEENS4_ILy4580909293892277728ENS7_IS3_yXadL_ZNKS3_15get_deliver_keyEvEEEEEEEE31load_object_by_primary_iteratorEl
        (i32.add
         (get_local $6)
         (i32.const 8)
        )
        (get_local $3)
       )
      )
     )
     (i32.add
      (get_local $6)
      (i32.const 8)
     )
    )
    (i32.const 112)
   )
  )
  (call $eosio_assert
   (tee_local $2
    (i32.ne
     (get_local $0)
     (i32.const 0)
    )
   )
   (i32.const 176)
  )
  (call $require_auth
   (i64.load
    (tee_local $3
     (i32.add
      (get_local $0)
      (i32.const 16)
     )
    )
   )
  )
  (call $eosio_assert
   (i64.eq
    (i64.load offset=32
     (get_local $0)
    )
    (i64.const 3)
   )
   (i32.const 608)
  )
  (set_local $4
   (i64.load
    (get_local $3)
   )
  )
  (call $eosio_assert
   (get_local $2)
   (i32.const 256)
  )
  (call $eosio_assert
   (i32.eq
    (i32.load offset=112
     (get_local $0)
    )
    (i32.add
     (get_local $6)
     (i32.const 8)
    )
   )
   (i32.const 304)
  )
  (call $eosio_assert
   (i64.eq
    (i64.load offset=8
     (get_local $6)
    )
    (call $current_receiver)
   )
   (i32.const 352)
  )
  (i64.store offset=184
   (get_local $6)
   (i64.load
    (tee_local $2
     (i32.add
      (get_local $0)
      (i32.const 8)
     )
    )
   )
  )
  (i64.store offset=192
   (get_local $6)
   (i64.load
    (get_local $3)
   )
  )
  (i64.store offset=200
   (get_local $6)
   (i64.load
    (i32.add
     (get_local $0)
     (i32.const 24)
    )
   )
  )
  (set_local $1
   (i64.load
    (get_local $0)
   )
  )
  (i64.store offset=32
   (get_local $0)
   (i64.const 4)
  )
  (call $eosio_assert
   (i32.const 1)
   (i32.const 416)
  )
  (i32.store offset=176
   (get_local $6)
   (i32.add
    (i32.add
     (get_local $6)
     (i32.const 48)
    )
    (i32.const 108)
   )
  )
  (i32.store offset=172
   (get_local $6)
   (i32.add
    (get_local $6)
    (i32.const 48)
   )
  )
  (i32.store offset=168
   (get_local $6)
   (i32.add
    (get_local $6)
    (i32.const 48)
   )
  )
  (drop
   (call $_ZN7rideEOSlsIN5eosio10datastreamIPcEEEERT_S6_RKNS_6Orders5orderE
    (i32.add
     (get_local $6)
     (i32.const 168)
    )
    (get_local $0)
   )
  )
  (call $db_update_i64
   (i32.load offset=116
    (get_local $0)
   )
   (get_local $4)
   (i32.add
    (get_local $6)
    (i32.const 48)
   )
   (i32.const 108)
  )
  (block $label$1
   (br_if $label$1
    (i64.lt_u
     (get_local $1)
     (i64.load
      (tee_local $3
       (i32.add
        (i32.add
         (get_local $6)
         (i32.const 8)
        )
        (i32.const 16)
       )
      )
     )
    )
   )
   (i64.store
    (get_local $3)
    (select
     (i64.const -2)
     (i64.add
      (get_local $1)
      (i64.const 1)
     )
     (i64.gt_u
      (get_local $1)
      (i64.const -3)
     )
    )
   )
  )
  (set_local $3
   (i32.add
    (i32.add
     (get_local $6)
     (i32.const 184)
    )
    (i32.const 8)
   )
  )
  (i64.store offset=216
   (get_local $6)
   (i64.load
    (get_local $2)
   )
  )
  (block $label$2
   (br_if $label$2
    (i32.eqz
     (call $memcmp
      (i32.add
       (get_local $6)
       (i32.const 184)
      )
      (i32.add
       (get_local $6)
       (i32.const 216)
      )
      (i32.const 8)
     )
    )
   )
   (block $label$3
    (br_if $label$3
     (i32.gt_s
      (tee_local $2
       (i32.load
        (tee_local $5
         (i32.add
          (get_local $0)
          (i32.const 120)
         )
        )
       )
      )
      (i32.const -1)
     )
    )
    (i32.store
     (get_local $5)
     (tee_local $2
      (call $db_idx64_find_primary
       (i64.load offset=8
        (get_local $6)
       )
       (i64.load
        (i32.add
         (get_local $6)
         (i32.const 16)
        )
       )
       (i64.const -6497942746098040832)
       (i32.add
        (get_local $6)
        (i32.const 208)
       )
       (get_local $1)
      )
     )
    )
   )
   (call $db_idx64_update
    (get_local $2)
    (get_local $4)
    (i32.add
     (get_local $6)
     (i32.const 216)
    )
   )
  )
  (set_local $2
   (i32.add
    (i32.add
     (get_local $6)
     (i32.const 184)
    )
    (i32.const 16)
   )
  )
  (i64.store offset=216
   (get_local $6)
   (i64.load
    (i32.add
     (get_local $0)
     (i32.const 16)
    )
   )
  )
  (block $label$4
   (br_if $label$4
    (i32.eqz
     (call $memcmp
      (get_local $3)
      (i32.add
       (get_local $6)
       (i32.const 216)
      )
      (i32.const 8)
     )
    )
   )
   (block $label$5
    (br_if $label$5
     (i32.gt_s
      (tee_local $3
       (i32.load
        (tee_local $5
         (i32.add
          (get_local $0)
          (i32.const 124)
         )
        )
       )
      )
      (i32.const -1)
     )
    )
    (i32.store
     (get_local $5)
     (tee_local $3
      (call $db_idx64_find_primary
       (i64.load offset=8
        (get_local $6)
       )
       (i64.load
        (i32.add
         (get_local $6)
         (i32.const 16)
        )
       )
       (i64.const -6497942746098040831)
       (i32.add
        (get_local $6)
        (i32.const 208)
       )
       (get_local $1)
      )
     )
    )
   )
   (call $db_idx64_update
    (get_local $3)
    (get_local $4)
    (i32.add
     (get_local $6)
     (i32.const 216)
    )
   )
  )
  (i64.store offset=216
   (get_local $6)
   (i64.load
    (i32.add
     (get_local $0)
     (i32.const 24)
    )
   )
  )
  (block $label$6
   (br_if $label$6
    (i32.eqz
     (call $memcmp
      (get_local $2)
      (i32.add
       (get_local $6)
       (i32.const 216)
      )
      (i32.const 8)
     )
    )
   )
   (block $label$7
    (br_if $label$7
     (i32.gt_s
      (tee_local $0
       (i32.load
        (tee_local $3
         (i32.add
          (get_local $0)
          (i32.const 128)
         )
        )
       )
      )
      (i32.const -1)
     )
    )
    (i32.store
     (get_local $3)
     (tee_local $0
      (call $db_idx64_find_primary
       (i64.load offset=8
        (get_local $6)
       )
       (i64.load
        (i32.add
         (get_local $6)
         (i32.const 16)
        )
       )
       (i64.const -6497942746098040830)
       (i32.add
        (get_local $6)
        (i32.const 208)
       )
       (get_local $1)
      )
     )
    )
   )
   (call $db_idx64_update
    (get_local $0)
    (get_local $4)
    (i32.add
     (get_local $6)
     (i32.const 216)
    )
   )
  )
  (block $label$8
   (br_if $label$8
    (i32.eqz
     (tee_local $2
      (i32.load offset=32
       (get_local $6)
      )
     )
    )
   )
   (block $label$9
    (block $label$10
     (br_if $label$10
      (i32.eq
       (tee_local $0
        (i32.load
         (tee_local $5
          (i32.add
           (get_local $6)
           (i32.const 36)
          )
         )
        )
       )
       (get_local $2)
      )
     )
     (loop $label$11
      (set_local $3
       (i32.load
        (tee_local $0
         (i32.add
          (get_local $0)
          (i32.const -24)
         )
        )
       )
      )
      (i32.store
       (get_local $0)
       (i32.const 0)
      )
      (block $label$12
       (br_if $label$12
        (i32.eqz
         (get_local $3)
        )
       )
       (call $_ZdlPv
        (get_local $3)
       )
      )
      (br_if $label$11
       (i32.ne
        (get_local $2)
        (get_local $0)
       )
      )
     )
     (set_local $0
      (i32.load
       (i32.add
        (get_local $6)
        (i32.const 32)
       )
      )
     )
     (br $label$9)
    )
    (set_local $0
     (get_local $2)
    )
   )
   (i32.store
    (get_local $5)
    (get_local $2)
   )
   (call $_ZdlPv
    (get_local $0)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $6)
    (i32.const 224)
   )
  )
 )
 (func $_ZN7rideEOS6Orders10ordertakenEyRK11checksum256 (type $FUNCSIG$viji) (param $0 i32) (param $1 i64) (param $2 i32)
  (local $3 i32)
  (local $4 i64)
  (local $5 i32)
  (local $6 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $6
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 224)
    )
   )
  )
  (i32.store
   (i32.add
    (i32.add
     (get_local $6)
     (i32.const 8)
    )
    (i32.const 32)
   )
   (i32.const 0)
  )
  (i64.store offset=24
   (get_local $6)
   (i64.const -1)
  )
  (i64.store offset=32
   (get_local $6)
   (i64.const 0)
  )
  (i64.store offset=8
   (get_local $6)
   (tee_local $4
    (i64.load
     (get_local $0)
    )
   )
  )
  (i64.store offset=16
   (get_local $6)
   (get_local $4)
  )
  (i32.store8
   (i32.add
    (get_local $6)
    (i32.const 46)
   )
   (i32.const 0)
  )
  (i32.store16 offset=44
   (get_local $6)
   (i32.const 0)
  )
  (set_local $0
   (i32.const 0)
  )
  (block $label$0
   (br_if $label$0
    (i32.lt_s
     (tee_local $3
      (call $db_find_i64
       (get_local $4)
       (get_local $4)
       (i64.const -6497942746098040832)
       (get_local $1)
      )
     )
     (i32.const 0)
    )
   )
   (call $eosio_assert
    (i32.eq
     (i32.load offset=112
      (tee_local $0
       (call $_ZNK5eosio11multi_indexILy11948801327611510784EN7rideEOS6Orders5orderEJNS_10indexed_byILy4580071945014837248EN5boost11multi_index13const_mem_funIS3_yXadL_ZNKS3_13get_buyer_keyEvEEEEEENS4_ILy4589353585820744704ENS7_IS3_yXadL_ZNKS3_14get_seller_keyEvEEEEEENS4_ILy4580909293892277728ENS7_IS3_yXadL_ZNKS3_15get_deliver_keyEvEEEEEEEE31load_object_by_primary_iteratorEl
        (i32.add
         (get_local $6)
         (i32.const 8)
        )
        (get_local $3)
       )
      )
     )
     (i32.add
      (get_local $6)
      (i32.const 8)
     )
    )
    (i32.const 112)
   )
  )
  (call $eosio_assert
   (tee_local $5
    (i32.ne
     (get_local $0)
     (i32.const 0)
    )
   )
   (i32.const 176)
  )
  (call $require_auth
   (i64.load
    (tee_local $3
     (i32.add
      (get_local $0)
      (i32.const 24)
     )
    )
   )
  )
  (call $assert_sha256
   (get_local $2)
   (i32.const 32)
   (i32.add
    (get_local $0)
    (i32.const 48)
   )
  )
  (call $eosio_assert
   (i64.eq
    (i64.load offset=32
     (get_local $0)
    )
    (i64.const 4)
   )
   (i32.const 544)
  )
  (set_local $4
   (i64.load
    (get_local $3)
   )
  )
  (call $eosio_assert
   (get_local $5)
   (i32.const 256)
  )
  (call $eosio_assert
   (i32.eq
    (i32.load offset=112
     (get_local $0)
    )
    (i32.add
     (get_local $6)
     (i32.const 8)
    )
   )
   (i32.const 304)
  )
  (call $eosio_assert
   (i64.eq
    (i64.load offset=8
     (get_local $6)
    )
    (call $current_receiver)
   )
   (i32.const 352)
  )
  (i64.store offset=184
   (get_local $6)
   (i64.load
    (tee_local $2
     (i32.add
      (get_local $0)
      (i32.const 8)
     )
    )
   )
  )
  (i64.store offset=192
   (get_local $6)
   (i64.load
    (i32.add
     (get_local $0)
     (i32.const 16)
    )
   )
  )
  (i64.store offset=200
   (get_local $6)
   (i64.load
    (get_local $3)
   )
  )
  (set_local $1
   (i64.load
    (get_local $0)
   )
  )
  (i64.store offset=32
   (get_local $0)
   (i64.const 5)
  )
  (call $eosio_assert
   (i32.const 1)
   (i32.const 416)
  )
  (i32.store offset=176
   (get_local $6)
   (i32.add
    (i32.add
     (get_local $6)
     (i32.const 48)
    )
    (i32.const 108)
   )
  )
  (i32.store offset=172
   (get_local $6)
   (i32.add
    (get_local $6)
    (i32.const 48)
   )
  )
  (i32.store offset=168
   (get_local $6)
   (i32.add
    (get_local $6)
    (i32.const 48)
   )
  )
  (drop
   (call $_ZN7rideEOSlsIN5eosio10datastreamIPcEEEERT_S6_RKNS_6Orders5orderE
    (i32.add
     (get_local $6)
     (i32.const 168)
    )
    (get_local $0)
   )
  )
  (call $db_update_i64
   (i32.load offset=116
    (get_local $0)
   )
   (get_local $4)
   (i32.add
    (get_local $6)
    (i32.const 48)
   )
   (i32.const 108)
  )
  (block $label$1
   (br_if $label$1
    (i64.lt_u
     (get_local $1)
     (i64.load
      (tee_local $3
       (i32.add
        (i32.add
         (get_local $6)
         (i32.const 8)
        )
        (i32.const 16)
       )
      )
     )
    )
   )
   (i64.store
    (get_local $3)
    (select
     (i64.const -2)
     (i64.add
      (get_local $1)
      (i64.const 1)
     )
     (i64.gt_u
      (get_local $1)
      (i64.const -3)
     )
    )
   )
  )
  (set_local $3
   (i32.add
    (i32.add
     (get_local $6)
     (i32.const 184)
    )
    (i32.const 8)
   )
  )
  (i64.store offset=216
   (get_local $6)
   (i64.load
    (get_local $2)
   )
  )
  (block $label$2
   (br_if $label$2
    (i32.eqz
     (call $memcmp
      (i32.add
       (get_local $6)
       (i32.const 184)
      )
      (i32.add
       (get_local $6)
       (i32.const 216)
      )
      (i32.const 8)
     )
    )
   )
   (block $label$3
    (br_if $label$3
     (i32.gt_s
      (tee_local $2
       (i32.load
        (tee_local $5
         (i32.add
          (get_local $0)
          (i32.const 120)
         )
        )
       )
      )
      (i32.const -1)
     )
    )
    (i32.store
     (get_local $5)
     (tee_local $2
      (call $db_idx64_find_primary
       (i64.load offset=8
        (get_local $6)
       )
       (i64.load
        (i32.add
         (get_local $6)
         (i32.const 16)
        )
       )
       (i64.const -6497942746098040832)
       (i32.add
        (get_local $6)
        (i32.const 208)
       )
       (get_local $1)
      )
     )
    )
   )
   (call $db_idx64_update
    (get_local $2)
    (get_local $4)
    (i32.add
     (get_local $6)
     (i32.const 216)
    )
   )
  )
  (set_local $2
   (i32.add
    (i32.add
     (get_local $6)
     (i32.const 184)
    )
    (i32.const 16)
   )
  )
  (i64.store offset=216
   (get_local $6)
   (i64.load
    (i32.add
     (get_local $0)
     (i32.const 16)
    )
   )
  )
  (block $label$4
   (br_if $label$4
    (i32.eqz
     (call $memcmp
      (get_local $3)
      (i32.add
       (get_local $6)
       (i32.const 216)
      )
      (i32.const 8)
     )
    )
   )
   (block $label$5
    (br_if $label$5
     (i32.gt_s
      (tee_local $3
       (i32.load
        (tee_local $5
         (i32.add
          (get_local $0)
          (i32.const 124)
         )
        )
       )
      )
      (i32.const -1)
     )
    )
    (i32.store
     (get_local $5)
     (tee_local $3
      (call $db_idx64_find_primary
       (i64.load offset=8
        (get_local $6)
       )
       (i64.load
        (i32.add
         (get_local $6)
         (i32.const 16)
        )
       )
       (i64.const -6497942746098040831)
       (i32.add
        (get_local $6)
        (i32.const 208)
       )
       (get_local $1)
      )
     )
    )
   )
   (call $db_idx64_update
    (get_local $3)
    (get_local $4)
    (i32.add
     (get_local $6)
     (i32.const 216)
    )
   )
  )
  (i64.store offset=216
   (get_local $6)
   (i64.load
    (i32.add
     (get_local $0)
     (i32.const 24)
    )
   )
  )
  (block $label$6
   (br_if $label$6
    (i32.eqz
     (call $memcmp
      (get_local $2)
      (i32.add
       (get_local $6)
       (i32.const 216)
      )
      (i32.const 8)
     )
    )
   )
   (block $label$7
    (br_if $label$7
     (i32.gt_s
      (tee_local $0
       (i32.load
        (tee_local $3
         (i32.add
          (get_local $0)
          (i32.const 128)
         )
        )
       )
      )
      (i32.const -1)
     )
    )
    (i32.store
     (get_local $3)
     (tee_local $0
      (call $db_idx64_find_primary
       (i64.load offset=8
        (get_local $6)
       )
       (i64.load
        (i32.add
         (get_local $6)
         (i32.const 16)
        )
       )
       (i64.const -6497942746098040830)
       (i32.add
        (get_local $6)
        (i32.const 208)
       )
       (get_local $1)
      )
     )
    )
   )
   (call $db_idx64_update
    (get_local $0)
    (get_local $4)
    (i32.add
     (get_local $6)
     (i32.const 216)
    )
   )
  )
  (block $label$8
   (br_if $label$8
    (i32.eqz
     (tee_local $2
      (i32.load offset=32
       (get_local $6)
      )
     )
    )
   )
   (block $label$9
    (block $label$10
     (br_if $label$10
      (i32.eq
       (tee_local $0
        (i32.load
         (tee_local $5
          (i32.add
           (get_local $6)
           (i32.const 36)
          )
         )
        )
       )
       (get_local $2)
      )
     )
     (loop $label$11
      (set_local $3
       (i32.load
        (tee_local $0
         (i32.add
          (get_local $0)
          (i32.const -24)
         )
        )
       )
      )
      (i32.store
       (get_local $0)
       (i32.const 0)
      )
      (block $label$12
       (br_if $label$12
        (i32.eqz
         (get_local $3)
        )
       )
       (call $_ZdlPv
        (get_local $3)
       )
      )
      (br_if $label$11
       (i32.ne
        (get_local $2)
        (get_local $0)
       )
      )
     )
     (set_local $0
      (i32.load
       (i32.add
        (get_local $6)
        (i32.const 32)
       )
      )
     )
     (br $label$9)
    )
    (set_local $0
     (get_local $2)
    )
   )
   (i32.store
    (get_local $5)
    (get_local $2)
   )
   (call $_ZdlPv
    (get_local $0)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $6)
    (i32.const 224)
   )
  )
 )
 (func $_ZN7rideEOS6Orders11orderdeliveEyRK11checksum256 (type $FUNCSIG$viji) (param $0 i32) (param $1 i64) (param $2 i32)
  (local $3 i32)
  (local $4 i64)
  (local $5 i32)
  (local $6 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $6
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 224)
    )
   )
  )
  (i32.store
   (i32.add
    (i32.add
     (get_local $6)
     (i32.const 8)
    )
    (i32.const 32)
   )
   (i32.const 0)
  )
  (i64.store offset=24
   (get_local $6)
   (i64.const -1)
  )
  (i64.store offset=32
   (get_local $6)
   (i64.const 0)
  )
  (i64.store offset=8
   (get_local $6)
   (tee_local $4
    (i64.load
     (get_local $0)
    )
   )
  )
  (i64.store offset=16
   (get_local $6)
   (get_local $4)
  )
  (i32.store8
   (i32.add
    (get_local $6)
    (i32.const 46)
   )
   (i32.const 0)
  )
  (i32.store16 offset=44
   (get_local $6)
   (i32.const 0)
  )
  (set_local $0
   (i32.const 0)
  )
  (block $label$0
   (br_if $label$0
    (i32.lt_s
     (tee_local $3
      (call $db_find_i64
       (get_local $4)
       (get_local $4)
       (i64.const -6497942746098040832)
       (get_local $1)
      )
     )
     (i32.const 0)
    )
   )
   (call $eosio_assert
    (i32.eq
     (i32.load offset=112
      (tee_local $0
       (call $_ZNK5eosio11multi_indexILy11948801327611510784EN7rideEOS6Orders5orderEJNS_10indexed_byILy4580071945014837248EN5boost11multi_index13const_mem_funIS3_yXadL_ZNKS3_13get_buyer_keyEvEEEEEENS4_ILy4589353585820744704ENS7_IS3_yXadL_ZNKS3_14get_seller_keyEvEEEEEENS4_ILy4580909293892277728ENS7_IS3_yXadL_ZNKS3_15get_deliver_keyEvEEEEEEEE31load_object_by_primary_iteratorEl
        (i32.add
         (get_local $6)
         (i32.const 8)
        )
        (get_local $3)
       )
      )
     )
     (i32.add
      (get_local $6)
      (i32.const 8)
     )
    )
    (i32.const 112)
   )
  )
  (call $eosio_assert
   (tee_local $5
    (i32.ne
     (get_local $0)
     (i32.const 0)
    )
   )
   (i32.const 176)
  )
  (call $require_auth
   (i64.load
    (tee_local $3
     (i32.add
      (get_local $0)
      (i32.const 24)
     )
    )
   )
  )
  (call $assert_sha256
   (get_local $2)
   (i32.const 32)
   (i32.add
    (get_local $0)
    (i32.const 80)
   )
  )
  (call $eosio_assert
   (i64.eq
    (i64.load offset=32
     (get_local $0)
    )
    (i64.const 5)
   )
   (i32.const 208)
  )
  (set_local $4
   (i64.load
    (get_local $3)
   )
  )
  (call $eosio_assert
   (get_local $5)
   (i32.const 256)
  )
  (call $eosio_assert
   (i32.eq
    (i32.load offset=112
     (get_local $0)
    )
    (i32.add
     (get_local $6)
     (i32.const 8)
    )
   )
   (i32.const 304)
  )
  (call $eosio_assert
   (i64.eq
    (i64.load offset=8
     (get_local $6)
    )
    (call $current_receiver)
   )
   (i32.const 352)
  )
  (i64.store offset=184
   (get_local $6)
   (i64.load
    (tee_local $2
     (i32.add
      (get_local $0)
      (i32.const 8)
     )
    )
   )
  )
  (i64.store offset=192
   (get_local $6)
   (i64.load
    (i32.add
     (get_local $0)
     (i32.const 16)
    )
   )
  )
  (i64.store offset=200
   (get_local $6)
   (i64.load
    (get_local $3)
   )
  )
  (set_local $1
   (i64.load
    (get_local $0)
   )
  )
  (i64.store offset=32
   (get_local $0)
   (i64.const 6)
  )
  (call $eosio_assert
   (i32.const 1)
   (i32.const 416)
  )
  (i32.store offset=176
   (get_local $6)
   (i32.add
    (i32.add
     (get_local $6)
     (i32.const 48)
    )
    (i32.const 108)
   )
  )
  (i32.store offset=172
   (get_local $6)
   (i32.add
    (get_local $6)
    (i32.const 48)
   )
  )
  (i32.store offset=168
   (get_local $6)
   (i32.add
    (get_local $6)
    (i32.const 48)
   )
  )
  (drop
   (call $_ZN7rideEOSlsIN5eosio10datastreamIPcEEEERT_S6_RKNS_6Orders5orderE
    (i32.add
     (get_local $6)
     (i32.const 168)
    )
    (get_local $0)
   )
  )
  (call $db_update_i64
   (i32.load offset=116
    (get_local $0)
   )
   (get_local $4)
   (i32.add
    (get_local $6)
    (i32.const 48)
   )
   (i32.const 108)
  )
  (block $label$1
   (br_if $label$1
    (i64.lt_u
     (get_local $1)
     (i64.load
      (tee_local $3
       (i32.add
        (i32.add
         (get_local $6)
         (i32.const 8)
        )
        (i32.const 16)
       )
      )
     )
    )
   )
   (i64.store
    (get_local $3)
    (select
     (i64.const -2)
     (i64.add
      (get_local $1)
      (i64.const 1)
     )
     (i64.gt_u
      (get_local $1)
      (i64.const -3)
     )
    )
   )
  )
  (set_local $3
   (i32.add
    (i32.add
     (get_local $6)
     (i32.const 184)
    )
    (i32.const 8)
   )
  )
  (i64.store offset=216
   (get_local $6)
   (i64.load
    (get_local $2)
   )
  )
  (block $label$2
   (br_if $label$2
    (i32.eqz
     (call $memcmp
      (i32.add
       (get_local $6)
       (i32.const 184)
      )
      (i32.add
       (get_local $6)
       (i32.const 216)
      )
      (i32.const 8)
     )
    )
   )
   (block $label$3
    (br_if $label$3
     (i32.gt_s
      (tee_local $2
       (i32.load
        (tee_local $5
         (i32.add
          (get_local $0)
          (i32.const 120)
         )
        )
       )
      )
      (i32.const -1)
     )
    )
    (i32.store
     (get_local $5)
     (tee_local $2
      (call $db_idx64_find_primary
       (i64.load offset=8
        (get_local $6)
       )
       (i64.load
        (i32.add
         (get_local $6)
         (i32.const 16)
        )
       )
       (i64.const -6497942746098040832)
       (i32.add
        (get_local $6)
        (i32.const 208)
       )
       (get_local $1)
      )
     )
    )
   )
   (call $db_idx64_update
    (get_local $2)
    (get_local $4)
    (i32.add
     (get_local $6)
     (i32.const 216)
    )
   )
  )
  (set_local $2
   (i32.add
    (i32.add
     (get_local $6)
     (i32.const 184)
    )
    (i32.const 16)
   )
  )
  (i64.store offset=216
   (get_local $6)
   (i64.load
    (i32.add
     (get_local $0)
     (i32.const 16)
    )
   )
  )
  (block $label$4
   (br_if $label$4
    (i32.eqz
     (call $memcmp
      (get_local $3)
      (i32.add
       (get_local $6)
       (i32.const 216)
      )
      (i32.const 8)
     )
    )
   )
   (block $label$5
    (br_if $label$5
     (i32.gt_s
      (tee_local $3
       (i32.load
        (tee_local $5
         (i32.add
          (get_local $0)
          (i32.const 124)
         )
        )
       )
      )
      (i32.const -1)
     )
    )
    (i32.store
     (get_local $5)
     (tee_local $3
      (call $db_idx64_find_primary
       (i64.load offset=8
        (get_local $6)
       )
       (i64.load
        (i32.add
         (get_local $6)
         (i32.const 16)
        )
       )
       (i64.const -6497942746098040831)
       (i32.add
        (get_local $6)
        (i32.const 208)
       )
       (get_local $1)
      )
     )
    )
   )
   (call $db_idx64_update
    (get_local $3)
    (get_local $4)
    (i32.add
     (get_local $6)
     (i32.const 216)
    )
   )
  )
  (i64.store offset=216
   (get_local $6)
   (i64.load
    (i32.add
     (get_local $0)
     (i32.const 24)
    )
   )
  )
  (block $label$6
   (br_if $label$6
    (i32.eqz
     (call $memcmp
      (get_local $2)
      (i32.add
       (get_local $6)
       (i32.const 216)
      )
      (i32.const 8)
     )
    )
   )
   (block $label$7
    (br_if $label$7
     (i32.gt_s
      (tee_local $0
       (i32.load
        (tee_local $3
         (i32.add
          (get_local $0)
          (i32.const 128)
         )
        )
       )
      )
      (i32.const -1)
     )
    )
    (i32.store
     (get_local $3)
     (tee_local $0
      (call $db_idx64_find_primary
       (i64.load offset=8
        (get_local $6)
       )
       (i64.load
        (i32.add
         (get_local $6)
         (i32.const 16)
        )
       )
       (i64.const -6497942746098040830)
       (i32.add
        (get_local $6)
        (i32.const 208)
       )
       (get_local $1)
      )
     )
    )
   )
   (call $db_idx64_update
    (get_local $0)
    (get_local $4)
    (i32.add
     (get_local $6)
     (i32.const 216)
    )
   )
  )
  (block $label$8
   (br_if $label$8
    (i32.eqz
     (tee_local $2
      (i32.load offset=32
       (get_local $6)
      )
     )
    )
   )
   (block $label$9
    (block $label$10
     (br_if $label$10
      (i32.eq
       (tee_local $0
        (i32.load
         (tee_local $5
          (i32.add
           (get_local $6)
           (i32.const 36)
          )
         )
        )
       )
       (get_local $2)
      )
     )
     (loop $label$11
      (set_local $3
       (i32.load
        (tee_local $0
         (i32.add
          (get_local $0)
          (i32.const -24)
         )
        )
       )
      )
      (i32.store
       (get_local $0)
       (i32.const 0)
      )
      (block $label$12
       (br_if $label$12
        (i32.eqz
         (get_local $3)
        )
       )
       (call $_ZdlPv
        (get_local $3)
       )
      )
      (br_if $label$11
       (i32.ne
        (get_local $2)
        (get_local $0)
       )
      )
     )
     (set_local $0
      (i32.load
       (i32.add
        (get_local $6)
        (i32.const 32)
       )
      )
     )
     (br $label$9)
    )
    (set_local $0
     (get_local $2)
    )
   )
   (i32.store
    (get_local $5)
    (get_local $2)
   )
   (call $_ZdlPv
    (get_local $0)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $6)
    (i32.const 224)
   )
  )
 )
 (func $_ZN7rideEOS6Orders11ordercancelEyRK11checksum256 (type $FUNCSIG$viji) (param $0 i32) (param $1 i64) (param $2 i32)
  (local $3 i32)
  (local $4 i64)
  (local $5 i32)
  (local $6 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $6
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 224)
    )
   )
  )
  (i32.store
   (i32.add
    (i32.add
     (get_local $6)
     (i32.const 8)
    )
    (i32.const 32)
   )
   (i32.const 0)
  )
  (i64.store offset=24
   (get_local $6)
   (i64.const -1)
  )
  (i64.store offset=32
   (get_local $6)
   (i64.const 0)
  )
  (i64.store offset=8
   (get_local $6)
   (tee_local $4
    (i64.load
     (get_local $0)
    )
   )
  )
  (i64.store offset=16
   (get_local $6)
   (get_local $4)
  )
  (i32.store8
   (i32.add
    (get_local $6)
    (i32.const 46)
   )
   (i32.const 0)
  )
  (i32.store16 offset=44
   (get_local $6)
   (i32.const 0)
  )
  (set_local $0
   (i32.const 0)
  )
  (block $label$0
   (br_if $label$0
    (i32.lt_s
     (tee_local $3
      (call $db_find_i64
       (get_local $4)
       (get_local $4)
       (i64.const -6497942746098040832)
       (get_local $1)
      )
     )
     (i32.const 0)
    )
   )
   (call $eosio_assert
    (i32.eq
     (i32.load offset=112
      (tee_local $0
       (call $_ZNK5eosio11multi_indexILy11948801327611510784EN7rideEOS6Orders5orderEJNS_10indexed_byILy4580071945014837248EN5boost11multi_index13const_mem_funIS3_yXadL_ZNKS3_13get_buyer_keyEvEEEEEENS4_ILy4589353585820744704ENS7_IS3_yXadL_ZNKS3_14get_seller_keyEvEEEEEENS4_ILy4580909293892277728ENS7_IS3_yXadL_ZNKS3_15get_deliver_keyEvEEEEEEEE31load_object_by_primary_iteratorEl
        (i32.add
         (get_local $6)
         (i32.const 8)
        )
        (get_local $3)
       )
      )
     )
     (i32.add
      (get_local $6)
      (i32.const 8)
     )
    )
    (i32.const 112)
   )
  )
  (call $eosio_assert
   (tee_local $3
    (i32.ne
     (get_local $0)
     (i32.const 0)
    )
   )
   (i32.const 176)
  )
  (call $require_auth
   (i64.load offset=8
    (get_local $0)
   )
  )
  (call $assert_sha256
   (get_local $2)
   (i32.const 32)
   (i32.add
    (get_local $0)
    (i32.const 80)
   )
  )
  (call $eosio_assert
   (i64.eq
    (i64.load offset=32
     (get_local $0)
    )
    (i64.const 5)
   )
   (i32.const 208)
  )
  (block $label$1
   (block $label$2
    (block $label$3
     (block $label$4
      (block $label$5
       (br_if $label$5
        (i64.gt_u
         (tee_local $4
          (i64.load offset=32
           (get_local $0)
          )
         )
         (i64.const 4)
        )
       )
       (set_local $4
        (i64.load
         (tee_local $2
          (i32.add
           (get_local $0)
           (i32.const 24)
          )
         )
        )
       )
       (call $eosio_assert
        (get_local $3)
        (i32.const 256)
       )
       (call $eosio_assert
        (i32.eq
         (i32.load offset=112
          (get_local $0)
         )
         (i32.add
          (get_local $6)
          (i32.const 8)
         )
        )
        (i32.const 304)
       )
       (call $eosio_assert
        (i64.eq
         (i64.load offset=8
          (get_local $6)
         )
         (call $current_receiver)
        )
        (i32.const 352)
       )
       (i64.store offset=184
        (get_local $6)
        (i64.load
         (tee_local $3
          (i32.add
           (get_local $0)
           (i32.const 8)
          )
         )
        )
       )
       (i64.store offset=192
        (get_local $6)
        (i64.load
         (i32.add
          (get_local $0)
          (i32.const 16)
         )
        )
       )
       (i64.store offset=200
        (get_local $6)
        (i64.load
         (get_local $2)
        )
       )
       (set_local $1
        (i64.load
         (get_local $0)
        )
       )
       (i64.store offset=32
        (get_local $0)
        (i64.const 8)
       )
       (call $eosio_assert
        (i32.const 1)
        (i32.const 416)
       )
       (i32.store offset=176
        (get_local $6)
        (i32.add
         (i32.add
          (get_local $6)
          (i32.const 48)
         )
         (i32.const 108)
        )
       )
       (i32.store offset=172
        (get_local $6)
        (i32.add
         (get_local $6)
         (i32.const 48)
        )
       )
       (i32.store offset=168
        (get_local $6)
        (i32.add
         (get_local $6)
         (i32.const 48)
        )
       )
       (drop
        (call $_ZN7rideEOSlsIN5eosio10datastreamIPcEEEERT_S6_RKNS_6Orders5orderE
         (i32.add
          (get_local $6)
          (i32.const 168)
         )
         (get_local $0)
        )
       )
       (call $db_update_i64
        (i32.load offset=116
         (get_local $0)
        )
        (get_local $4)
        (i32.add
         (get_local $6)
         (i32.const 48)
        )
        (i32.const 108)
       )
       (block $label$6
        (br_if $label$6
         (i64.lt_u
          (get_local $1)
          (i64.load
           (tee_local $2
            (i32.add
             (i32.add
              (get_local $6)
              (i32.const 8)
             )
             (i32.const 16)
            )
           )
          )
         )
        )
        (i64.store
         (get_local $2)
         (select
          (i64.const -2)
          (i64.add
           (get_local $1)
           (i64.const 1)
          )
          (i64.gt_u
           (get_local $1)
           (i64.const -3)
          )
         )
        )
       )
       (set_local $2
        (i32.add
         (i32.add
          (get_local $6)
          (i32.const 184)
         )
         (i32.const 8)
        )
       )
       (i64.store offset=216
        (get_local $6)
        (i64.load
         (get_local $3)
        )
       )
       (block $label$7
        (br_if $label$7
         (i32.eqz
          (call $memcmp
           (i32.add
            (get_local $6)
            (i32.const 184)
           )
           (i32.add
            (get_local $6)
            (i32.const 216)
           )
           (i32.const 8)
          )
         )
        )
        (block $label$8
         (br_if $label$8
          (i32.gt_s
           (tee_local $3
            (i32.load
             (tee_local $5
              (i32.add
               (get_local $0)
               (i32.const 120)
              )
             )
            )
           )
           (i32.const -1)
          )
         )
         (i32.store
          (get_local $5)
          (tee_local $3
           (call $db_idx64_find_primary
            (i64.load offset=8
             (get_local $6)
            )
            (i64.load
             (i32.add
              (get_local $6)
              (i32.const 16)
             )
            )
            (i64.const -6497942746098040832)
            (i32.add
             (get_local $6)
             (i32.const 208)
            )
            (get_local $1)
           )
          )
         )
        )
        (call $db_idx64_update
         (get_local $3)
         (get_local $4)
         (i32.add
          (get_local $6)
          (i32.const 216)
         )
        )
       )
       (set_local $3
        (i32.add
         (i32.add
          (get_local $6)
          (i32.const 184)
         )
         (i32.const 16)
        )
       )
       (i64.store offset=216
        (get_local $6)
        (i64.load
         (i32.add
          (get_local $0)
          (i32.const 16)
         )
        )
       )
       (block $label$9
        (br_if $label$9
         (i32.eqz
          (call $memcmp
           (get_local $2)
           (i32.add
            (get_local $6)
            (i32.const 216)
           )
           (i32.const 8)
          )
         )
        )
        (block $label$10
         (br_if $label$10
          (i32.gt_s
           (tee_local $2
            (i32.load
             (tee_local $5
              (i32.add
               (get_local $0)
               (i32.const 124)
              )
             )
            )
           )
           (i32.const -1)
          )
         )
         (i32.store
          (get_local $5)
          (tee_local $2
           (call $db_idx64_find_primary
            (i64.load offset=8
             (get_local $6)
            )
            (i64.load
             (i32.add
              (get_local $6)
              (i32.const 16)
             )
            )
            (i64.const -6497942746098040831)
            (i32.add
             (get_local $6)
             (i32.const 208)
            )
            (get_local $1)
           )
          )
         )
        )
        (call $db_idx64_update
         (get_local $2)
         (get_local $4)
         (i32.add
          (get_local $6)
          (i32.const 216)
         )
        )
       )
       (i64.store offset=216
        (get_local $6)
        (i64.load
         (i32.add
          (get_local $0)
          (i32.const 24)
         )
        )
       )
       (br_if $label$4
        (i32.eqz
         (call $memcmp
          (get_local $3)
          (i32.add
           (get_local $6)
           (i32.const 216)
          )
          (i32.const 8)
         )
        )
       )
       (block $label$11
        (br_if $label$11
         (i32.gt_s
          (tee_local $0
           (i32.load
            (tee_local $2
             (i32.add
              (get_local $0)
              (i32.const 128)
             )
            )
           )
          )
          (i32.const -1)
         )
        )
        (i32.store
         (get_local $2)
         (tee_local $0
          (call $db_idx64_find_primary
           (i64.load offset=8
            (get_local $6)
           )
           (i64.load
            (i32.add
             (get_local $6)
             (i32.const 16)
            )
           )
           (i64.const -6497942746098040830)
           (i32.add
            (get_local $6)
            (i32.const 208)
           )
           (get_local $1)
          )
         )
        )
       )
       (call $db_idx64_update
        (get_local $0)
        (get_local $4)
        (i32.add
         (get_local $6)
         (i32.const 216)
        )
       )
       (br_if $label$3
        (tee_local $3
         (i32.load offset=32
          (get_local $6)
         )
        )
       )
       (br $label$2)
      )
      (br_if $label$1
       (i64.ne
        (get_local $4)
        (i64.const 5)
       )
      )
     )
     (br_if $label$2
      (i32.eqz
       (tee_local $3
        (i32.load offset=32
         (get_local $6)
        )
       )
      )
     )
    )
    (block $label$12
     (block $label$13
      (br_if $label$13
       (i32.eq
        (tee_local $0
         (i32.load
          (tee_local $5
           (i32.add
            (get_local $6)
            (i32.const 36)
           )
          )
         )
        )
        (get_local $3)
       )
      )
      (loop $label$14
       (set_local $2
        (i32.load
         (tee_local $0
          (i32.add
           (get_local $0)
           (i32.const -24)
          )
         )
        )
       )
       (i32.store
        (get_local $0)
        (i32.const 0)
       )
       (block $label$15
        (br_if $label$15
         (i32.eqz
          (get_local $2)
         )
        )
        (call $_ZdlPv
         (get_local $2)
        )
       )
       (br_if $label$14
        (i32.ne
         (get_local $3)
         (get_local $0)
        )
       )
      )
      (set_local $0
       (i32.load
        (i32.add
         (get_local $6)
         (i32.const 32)
        )
       )
      )
      (br $label$12)
     )
     (set_local $0
      (get_local $3)
     )
    )
    (i32.store
     (get_local $5)
     (get_local $3)
    )
    (call $_ZdlPv
     (get_local $0)
    )
   )
   (i32.store offset=4
    (i32.const 0)
    (i32.add
     (get_local $6)
     (i32.const 224)
    )
   )
   (return)
  )
  (call $abort)
  (unreachable)
 )
 (func $_ZNK5eosio11multi_indexILy11948801327611510784EN7rideEOS6Orders5orderEJNS_10indexed_byILy4580071945014837248EN5boost11multi_index13const_mem_funIS3_yXadL_ZNKS3_13get_buyer_keyEvEEEEEENS4_ILy4589353585820744704ENS7_IS3_yXadL_ZNKS3_14get_seller_keyEvEEEEEENS4_ILy4580909293892277728ENS7_IS3_yXadL_ZNKS3_15get_deliver_keyEvEEEEEEEE31load_object_by_primary_iteratorEl (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i64)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (set_local $8
   (tee_local $9
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 48)
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (get_local $9)
  )
  (block $label$0
   (br_if $label$0
    (i32.eq
     (tee_local $7
      (i32.load
       (i32.add
        (get_local $0)
        (i32.const 28)
       )
      )
     )
     (tee_local $2
      (i32.load offset=24
       (get_local $0)
      )
     )
    )
   )
   (set_local $3
    (i32.sub
     (i32.const 0)
     (get_local $2)
    )
   )
   (set_local $6
    (i32.add
     (get_local $7)
     (i32.const -24)
    )
   )
   (loop $label$1
    (br_if $label$0
     (i32.eq
      (i32.load
       (i32.add
        (get_local $6)
        (i32.const 16)
       )
      )
      (get_local $1)
     )
    )
    (set_local $7
     (get_local $6)
    )
    (set_local $6
     (tee_local $4
      (i32.add
       (get_local $6)
       (i32.const -24)
      )
     )
    )
    (br_if $label$1
     (i32.ne
      (i32.add
       (get_local $4)
       (get_local $3)
      )
      (i32.const -24)
     )
    )
   )
  )
  (block $label$2
   (block $label$3
    (br_if $label$3
     (i32.eq
      (get_local $7)
      (get_local $2)
     )
    )
    (set_local $6
     (i32.load
      (i32.add
       (get_local $7)
       (i32.const -24)
      )
     )
    )
    (br $label$2)
   )
   (call $eosio_assert
    (i32.xor
     (i32.shr_u
      (tee_local $6
       (call $db_get_i64
        (get_local $1)
        (i32.const 0)
        (i32.const 0)
       )
      )
      (i32.const 31)
     )
     (i32.const 1)
    )
    (i32.const 496)
   )
   (block $label$4
    (block $label$5
     (br_if $label$5
      (i32.lt_u
       (get_local $6)
       (i32.const 513)
      )
     )
     (set_local $4
      (call $malloc
       (get_local $6)
      )
     )
     (br $label$4)
    )
    (i32.store offset=4
     (i32.const 0)
     (tee_local $4
      (i32.sub
       (get_local $9)
       (i32.and
        (i32.add
         (get_local $6)
         (i32.const 15)
        )
        (i32.const -16)
       )
      )
     )
    )
   )
   (drop
    (call $db_get_i64
     (get_local $1)
     (get_local $4)
     (get_local $6)
    )
   )
   (i32.store offset=36
    (get_local $8)
    (get_local $4)
   )
   (i32.store offset=32
    (get_local $8)
    (get_local $4)
   )
   (i32.store offset=40
    (get_local $8)
    (i32.add
     (get_local $4)
     (get_local $6)
    )
   )
   (block $label$6
    (br_if $label$6
     (i32.lt_u
      (get_local $6)
      (i32.const 513)
     )
    )
    (call $free
     (get_local $4)
    )
   )
   (i32.store offset=112
    (tee_local $6
     (call $_Znwj
      (i32.const 144)
     )
    )
    (get_local $0)
   )
   (i32.store offset=40
    (get_local $6)
    (i32.const 0)
   )
   (drop
    (call $_ZN7rideEOSrsIN5eosio10datastreamIPKcEEEERT_S7_RNS_6Orders5orderE
     (i32.add
      (get_local $8)
      (i32.const 32)
     )
     (get_local $6)
    )
   )
   (i32.store offset=120
    (get_local $6)
    (i32.const -1)
   )
   (i32.store offset=116
    (get_local $6)
    (get_local $1)
   )
   (i32.store offset=124
    (get_local $6)
    (i32.const -1)
   )
   (i32.store offset=128
    (get_local $6)
    (i32.const -1)
   )
   (i32.store offset=24
    (get_local $8)
    (get_local $6)
   )
   (i64.store offset=16
    (get_local $8)
    (tee_local $5
     (i64.load
      (get_local $6)
     )
    )
   )
   (i32.store offset=12
    (get_local $8)
    (tee_local $7
     (i32.load offset=116
      (get_local $6)
     )
    )
   )
   (block $label$7
    (block $label$8
     (br_if $label$8
      (i32.ge_u
       (tee_local $4
        (i32.load
         (tee_local $1
          (i32.add
           (get_local $0)
           (i32.const 28)
          )
         )
        )
       )
       (i32.load
        (i32.add
         (get_local $0)
         (i32.const 32)
        )
       )
      )
     )
     (i64.store offset=8
      (get_local $4)
      (get_local $5)
     )
     (i32.store offset=16
      (get_local $4)
      (get_local $7)
     )
     (i32.store offset=24
      (get_local $8)
      (i32.const 0)
     )
     (i32.store
      (get_local $4)
      (get_local $6)
     )
     (i32.store
      (get_local $1)
      (i32.add
       (get_local $4)
       (i32.const 24)
      )
     )
     (br $label$7)
    )
    (call $_ZNSt3__16vectorIN5eosio11multi_indexILy11948801327611510784EN7rideEOS6Orders5orderEJNS1_10indexed_byILy4580071945014837248EN5boost11multi_index13const_mem_funIS5_yXadL_ZNKS5_13get_buyer_keyEvEEEEEENS6_ILy4589353585820744704ENS9_IS5_yXadL_ZNKS5_14get_seller_keyEvEEEEEENS6_ILy4580909293892277728ENS9_IS5_yXadL_ZNKS5_15get_deliver_keyEvEEEEEEEE8item_ptrENS_9allocatorISH_EEE24__emplace_back_slow_pathIJNS_10unique_ptrINSG_4itemENS_14default_deleteISN_EEEERyRlEEEvDpOT_
     (i32.add
      (get_local $0)
      (i32.const 24)
     )
     (i32.add
      (get_local $8)
      (i32.const 24)
     )
     (i32.add
      (get_local $8)
      (i32.const 16)
     )
     (i32.add
      (get_local $8)
      (i32.const 12)
     )
    )
   )
   (set_local $4
    (i32.load offset=24
     (get_local $8)
    )
   )
   (i32.store offset=24
    (get_local $8)
    (i32.const 0)
   )
   (br_if $label$2
    (i32.eqz
     (get_local $4)
    )
   )
   (call $_ZdlPv
    (get_local $4)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $8)
    (i32.const 48)
   )
  )
  (get_local $6)
 )
 (func $_ZN7rideEOSlsIN5eosio10datastreamIPcEEEERT_S6_RKNS_6Orders5orderE (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (call $eosio_assert
   (i32.gt_s
    (i32.sub
     (i32.load offset=8
      (get_local $0)
     )
     (i32.load offset=4
      (get_local $0)
     )
    )
    (i32.const 7)
   )
   (i32.const 480)
  )
  (drop
   (call $memcpy
    (i32.load offset=4
     (get_local $0)
    )
    (get_local $1)
    (i32.const 8)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (tee_local $2
    (i32.add
     (i32.load offset=4
      (get_local $0)
     )
     (i32.const 8)
    )
   )
  )
  (call $eosio_assert
   (i32.gt_s
    (i32.sub
     (i32.load offset=8
      (get_local $0)
     )
     (get_local $2)
    )
    (i32.const 7)
   )
   (i32.const 480)
  )
  (drop
   (call $memcpy
    (i32.load offset=4
     (get_local $0)
    )
    (i32.add
     (get_local $1)
     (i32.const 8)
    )
    (i32.const 8)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (tee_local $2
    (i32.add
     (i32.load offset=4
      (get_local $0)
     )
     (i32.const 8)
    )
   )
  )
  (call $eosio_assert
   (i32.gt_s
    (i32.sub
     (i32.load offset=8
      (get_local $0)
     )
     (get_local $2)
    )
    (i32.const 7)
   )
   (i32.const 480)
  )
  (drop
   (call $memcpy
    (i32.load offset=4
     (get_local $0)
    )
    (i32.add
     (get_local $1)
     (i32.const 16)
    )
    (i32.const 8)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (tee_local $2
    (i32.add
     (i32.load offset=4
      (get_local $0)
     )
     (i32.const 8)
    )
   )
  )
  (call $eosio_assert
   (i32.gt_s
    (i32.sub
     (i32.load offset=8
      (get_local $0)
     )
     (get_local $2)
    )
    (i32.const 7)
   )
   (i32.const 480)
  )
  (drop
   (call $memcpy
    (i32.load offset=4
     (get_local $0)
    )
    (i32.add
     (get_local $1)
     (i32.const 24)
    )
    (i32.const 8)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (tee_local $2
    (i32.add
     (i32.load offset=4
      (get_local $0)
     )
     (i32.const 8)
    )
   )
  )
  (call $eosio_assert
   (i32.gt_s
    (i32.sub
     (i32.load offset=8
      (get_local $0)
     )
     (get_local $2)
    )
    (i32.const 7)
   )
   (i32.const 480)
  )
  (drop
   (call $memcpy
    (i32.load offset=4
     (get_local $0)
    )
    (i32.add
     (get_local $1)
     (i32.const 32)
    )
    (i32.const 8)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (tee_local $2
    (i32.add
     (i32.load offset=4
      (get_local $0)
     )
     (i32.const 8)
    )
   )
  )
  (call $eosio_assert
   (i32.gt_s
    (i32.sub
     (i32.load offset=8
      (get_local $0)
     )
     (get_local $2)
    )
    (i32.const 3)
   )
   (i32.const 480)
  )
  (drop
   (call $memcpy
    (i32.load offset=4
     (get_local $0)
    )
    (i32.add
     (get_local $1)
     (i32.const 40)
    )
    (i32.const 4)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (tee_local $2
    (i32.add
     (i32.load offset=4
      (get_local $0)
     )
     (i32.const 4)
    )
   )
  )
  (call $eosio_assert
   (i32.gt_s
    (i32.sub
     (i32.load offset=8
      (get_local $0)
     )
     (get_local $2)
    )
    (i32.const 31)
   )
   (i32.const 480)
  )
  (drop
   (call $memcpy
    (i32.load offset=4
     (get_local $0)
    )
    (i32.add
     (get_local $1)
     (i32.const 48)
    )
    (i32.const 32)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (tee_local $2
    (i32.add
     (i32.load offset=4
      (get_local $0)
     )
     (i32.const 32)
    )
   )
  )
  (call $eosio_assert
   (i32.gt_s
    (i32.sub
     (i32.load offset=8
      (get_local $0)
     )
     (get_local $2)
    )
    (i32.const 31)
   )
   (i32.const 480)
  )
  (drop
   (call $memcpy
    (i32.load offset=4
     (get_local $0)
    )
    (i32.add
     (get_local $1)
     (i32.const 80)
    )
    (i32.const 32)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (i32.add
    (i32.load offset=4
     (get_local $0)
    )
    (i32.const 32)
   )
  )
  (get_local $0)
 )
 (func $_ZN7rideEOSrsIN5eosio10datastreamIPKcEEEERT_S7_RNS_6Orders5orderE (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (call $eosio_assert
   (i32.gt_u
    (i32.sub
     (i32.load offset=8
      (get_local $0)
     )
     (i32.load offset=4
      (get_local $0)
     )
    )
    (i32.const 7)
   )
   (i32.const 528)
  )
  (drop
   (call $memcpy
    (get_local $1)
    (i32.load offset=4
     (get_local $0)
    )
    (i32.const 8)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (tee_local $2
    (i32.add
     (i32.load offset=4
      (get_local $0)
     )
     (i32.const 8)
    )
   )
  )
  (call $eosio_assert
   (i32.gt_u
    (i32.sub
     (i32.load offset=8
      (get_local $0)
     )
     (get_local $2)
    )
    (i32.const 7)
   )
   (i32.const 528)
  )
  (drop
   (call $memcpy
    (i32.add
     (get_local $1)
     (i32.const 8)
    )
    (i32.load offset=4
     (get_local $0)
    )
    (i32.const 8)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (tee_local $2
    (i32.add
     (i32.load offset=4
      (get_local $0)
     )
     (i32.const 8)
    )
   )
  )
  (call $eosio_assert
   (i32.gt_u
    (i32.sub
     (i32.load offset=8
      (get_local $0)
     )
     (get_local $2)
    )
    (i32.const 7)
   )
   (i32.const 528)
  )
  (drop
   (call $memcpy
    (i32.add
     (get_local $1)
     (i32.const 16)
    )
    (i32.load offset=4
     (get_local $0)
    )
    (i32.const 8)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (tee_local $2
    (i32.add
     (i32.load offset=4
      (get_local $0)
     )
     (i32.const 8)
    )
   )
  )
  (call $eosio_assert
   (i32.gt_u
    (i32.sub
     (i32.load offset=8
      (get_local $0)
     )
     (get_local $2)
    )
    (i32.const 7)
   )
   (i32.const 528)
  )
  (drop
   (call $memcpy
    (i32.add
     (get_local $1)
     (i32.const 24)
    )
    (i32.load offset=4
     (get_local $0)
    )
    (i32.const 8)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (tee_local $2
    (i32.add
     (i32.load offset=4
      (get_local $0)
     )
     (i32.const 8)
    )
   )
  )
  (call $eosio_assert
   (i32.gt_u
    (i32.sub
     (i32.load offset=8
      (get_local $0)
     )
     (get_local $2)
    )
    (i32.const 7)
   )
   (i32.const 528)
  )
  (drop
   (call $memcpy
    (i32.add
     (get_local $1)
     (i32.const 32)
    )
    (i32.load offset=4
     (get_local $0)
    )
    (i32.const 8)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (tee_local $2
    (i32.add
     (i32.load offset=4
      (get_local $0)
     )
     (i32.const 8)
    )
   )
  )
  (call $eosio_assert
   (i32.gt_u
    (i32.sub
     (i32.load offset=8
      (get_local $0)
     )
     (get_local $2)
    )
    (i32.const 3)
   )
   (i32.const 528)
  )
  (drop
   (call $memcpy
    (i32.add
     (get_local $1)
     (i32.const 40)
    )
    (i32.load offset=4
     (get_local $0)
    )
    (i32.const 4)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (tee_local $2
    (i32.add
     (i32.load offset=4
      (get_local $0)
     )
     (i32.const 4)
    )
   )
  )
  (call $eosio_assert
   (i32.gt_u
    (i32.sub
     (i32.load offset=8
      (get_local $0)
     )
     (get_local $2)
    )
    (i32.const 31)
   )
   (i32.const 528)
  )
  (drop
   (call $memcpy
    (i32.add
     (get_local $1)
     (i32.const 48)
    )
    (i32.load offset=4
     (get_local $0)
    )
    (i32.const 32)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (tee_local $2
    (i32.add
     (i32.load offset=4
      (get_local $0)
     )
     (i32.const 32)
    )
   )
  )
  (call $eosio_assert
   (i32.gt_u
    (i32.sub
     (i32.load offset=8
      (get_local $0)
     )
     (get_local $2)
    )
    (i32.const 31)
   )
   (i32.const 528)
  )
  (drop
   (call $memcpy
    (i32.add
     (get_local $1)
     (i32.const 80)
    )
    (i32.load offset=4
     (get_local $0)
    )
    (i32.const 32)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (i32.add
    (i32.load offset=4
     (get_local $0)
    )
    (i32.const 32)
   )
  )
  (get_local $0)
 )
 (func $_ZNSt3__16vectorIN5eosio11multi_indexILy11948801327611510784EN7rideEOS6Orders5orderEJNS1_10indexed_byILy4580071945014837248EN5boost11multi_index13const_mem_funIS5_yXadL_ZNKS5_13get_buyer_keyEvEEEEEENS6_ILy4589353585820744704ENS9_IS5_yXadL_ZNKS5_14get_seller_keyEvEEEEEENS6_ILy4580909293892277728ENS9_IS5_yXadL_ZNKS5_15get_deliver_keyEvEEEEEEEE8item_ptrENS_9allocatorISH_EEE24__emplace_back_slow_pathIJNS_10unique_ptrINSG_4itemENS_14default_deleteISN_EEEERyRlEEEvDpOT_ (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (block $label$0
   (block $label$1
    (br_if $label$1
     (i32.ge_u
      (tee_local $5
       (i32.add
        (tee_local $4
         (i32.div_s
          (i32.sub
           (i32.load offset=4
            (get_local $0)
           )
           (tee_local $6
            (i32.load
             (get_local $0)
            )
           )
          )
          (i32.const 24)
         )
        )
        (i32.const 1)
       )
      )
      (i32.const 178956971)
     )
    )
    (set_local $7
     (i32.const 178956970)
    )
    (block $label$2
     (block $label$3
      (br_if $label$3
       (i32.gt_u
        (tee_local $6
         (i32.div_s
          (i32.sub
           (i32.load offset=8
            (get_local $0)
           )
           (get_local $6)
          )
          (i32.const 24)
         )
        )
        (i32.const 89478484)
       )
      )
      (br_if $label$2
       (i32.eqz
        (tee_local $7
         (select
          (get_local $5)
          (tee_local $7
           (i32.shl
            (get_local $6)
            (i32.const 1)
           )
          )
          (i32.lt_u
           (get_local $7)
           (get_local $5)
          )
         )
        )
       )
      )
     )
     (set_local $6
      (call $_Znwj
       (i32.mul
        (get_local $7)
        (i32.const 24)
       )
      )
     )
     (br $label$0)
    )
    (set_local $7
     (i32.const 0)
    )
    (set_local $6
     (i32.const 0)
    )
    (br $label$0)
   )
   (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
    (get_local $0)
   )
   (unreachable)
  )
  (set_local $5
   (i32.load
    (get_local $1)
   )
  )
  (i32.store
   (get_local $1)
   (i32.const 0)
  )
  (i32.store
   (tee_local $1
    (i32.add
     (get_local $6)
     (i32.mul
      (get_local $4)
      (i32.const 24)
     )
    )
   )
   (get_local $5)
  )
  (i64.store offset=8
   (get_local $1)
   (i64.load
    (get_local $2)
   )
  )
  (i32.store offset=16
   (get_local $1)
   (i32.load
    (get_local $3)
   )
  )
  (set_local $4
   (i32.add
    (get_local $6)
    (i32.mul
     (get_local $7)
     (i32.const 24)
    )
   )
  )
  (set_local $5
   (i32.add
    (get_local $1)
    (i32.const 24)
   )
  )
  (block $label$4
   (block $label$5
    (br_if $label$5
     (i32.eq
      (tee_local $6
       (i32.load
        (i32.add
         (get_local $0)
         (i32.const 4)
        )
       )
      )
      (tee_local $7
       (i32.load
        (get_local $0)
       )
      )
     )
    )
    (loop $label$6
     (set_local $3
      (i32.load
       (tee_local $2
        (i32.add
         (get_local $6)
         (i32.const -24)
        )
       )
      )
     )
     (i32.store
      (get_local $2)
      (i32.const 0)
     )
     (i32.store
      (i32.add
       (get_local $1)
       (i32.const -24)
      )
      (get_local $3)
     )
     (i32.store
      (i32.add
       (get_local $1)
       (i32.const -8)
      )
      (i32.load
       (i32.add
        (get_local $6)
        (i32.const -8)
       )
      )
     )
     (i32.store
      (i32.add
       (get_local $1)
       (i32.const -12)
      )
      (i32.load
       (i32.add
        (get_local $6)
        (i32.const -12)
       )
      )
     )
     (i32.store
      (i32.add
       (get_local $1)
       (i32.const -16)
      )
      (i32.load
       (i32.add
        (get_local $6)
        (i32.const -16)
       )
      )
     )
     (set_local $1
      (i32.add
       (get_local $1)
       (i32.const -24)
      )
     )
     (set_local $6
      (get_local $2)
     )
     (br_if $label$6
      (i32.ne
       (get_local $7)
       (get_local $2)
      )
     )
    )
    (set_local $7
     (i32.load
      (i32.add
       (get_local $0)
       (i32.const 4)
      )
     )
    )
    (set_local $6
     (i32.load
      (get_local $0)
     )
    )
    (br $label$4)
   )
   (set_local $6
    (get_local $7)
   )
  )
  (i32.store
   (get_local $0)
   (get_local $1)
  )
  (i32.store
   (i32.add
    (get_local $0)
    (i32.const 4)
   )
   (get_local $5)
  )
  (i32.store
   (i32.add
    (get_local $0)
    (i32.const 8)
   )
   (get_local $4)
  )
  (block $label$7
   (br_if $label$7
    (i32.eq
     (get_local $7)
     (get_local $6)
    )
   )
   (loop $label$8
    (set_local $1
     (i32.load
      (tee_local $7
       (i32.add
        (get_local $7)
        (i32.const -24)
       )
      )
     )
    )
    (i32.store
     (get_local $7)
     (i32.const 0)
    )
    (block $label$9
     (br_if $label$9
      (i32.eqz
       (get_local $1)
      )
     )
     (call $_ZdlPv
      (get_local $1)
     )
    )
    (br_if $label$8
     (i32.ne
      (get_local $6)
      (get_local $7)
     )
    )
   )
  )
  (block $label$10
   (br_if $label$10
    (i32.eqz
     (get_local $6)
    )
   )
   (call $_ZdlPv
    (get_local $6)
   )
  )
 )
 (func $_ZNK5eosio11multi_indexILy11948801327611510784EN7rideEOS6Orders5orderEJNS_10indexed_byILy4580071945014837248EN5boost11multi_index13const_mem_funIS3_yXadL_ZNKS3_13get_buyer_keyEvEEEEEENS4_ILy4589353585820744704ENS7_IS3_yXadL_ZNKS3_14get_seller_keyEvEEEEEENS4_ILy4580909293892277728ENS7_IS3_yXadL_ZNKS3_15get_deliver_keyEvEEEEEEEE5indexILy4580071945014837248ES8_Ly0ELb0EE11lower_boundERKy (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i64)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $10
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 16)
    )
   )
  )
  (i64.store offset=8
   (get_local $10)
   (i64.const 0)
  )
  (i64.store
   (get_local $10)
   (i64.load
    (get_local $2)
   )
  )
  (set_local $2
   (i32.const 0)
  )
  (block $label$0
   (br_if $label$0
    (i32.lt_s
     (tee_local $3
      (call $db_idx64_lowerbound
       (i64.load
        (tee_local $8
         (i32.load
          (get_local $1)
         )
        )
       )
       (i64.load offset=8
        (get_local $8)
       )
       (i64.const -6497942746098040832)
       (get_local $10)
       (i32.add
        (get_local $10)
        (i32.const 8)
       )
      )
     )
     (i32.const 0)
    )
   )
   (set_local $5
    (i64.load offset=8
     (get_local $10)
    )
   )
   (block $label$1
    (br_if $label$1
     (i32.eq
      (tee_local $9
       (i32.load
        (i32.add
         (tee_local $4
          (i32.load
           (get_local $1)
          )
         )
         (i32.const 28)
        )
       )
      )
      (tee_local $6
       (i32.load offset=24
        (get_local $4)
       )
      )
     )
    )
    (set_local $2
     (i32.add
      (get_local $9)
      (i32.const -24)
     )
    )
    (set_local $7
     (i32.sub
      (i32.const 0)
      (get_local $6)
     )
    )
    (loop $label$2
     (br_if $label$1
      (i64.eq
       (i64.load
        (i32.load
         (get_local $2)
        )
       )
       (get_local $5)
      )
     )
     (set_local $9
      (get_local $2)
     )
     (set_local $2
      (tee_local $8
       (i32.add
        (get_local $2)
        (i32.const -24)
       )
      )
     )
     (br_if $label$2
      (i32.ne
       (i32.add
        (get_local $8)
        (get_local $7)
       )
       (i32.const -24)
      )
     )
    )
   )
   (block $label$3
    (block $label$4
     (br_if $label$4
      (i32.eq
       (get_local $9)
       (get_local $6)
      )
     )
     (call $eosio_assert
      (i32.eq
       (i32.load offset=112
        (tee_local $2
         (i32.load
          (i32.add
           (get_local $9)
           (i32.const -24)
          )
         )
        )
       )
       (get_local $4)
      )
      (i32.const 112)
     )
     (br $label$3)
    )
    (call $eosio_assert
     (i32.eq
      (i32.load offset=112
       (tee_local $2
        (call $_ZNK5eosio11multi_indexILy11948801327611510784EN7rideEOS6Orders5orderEJNS_10indexed_byILy4580071945014837248EN5boost11multi_index13const_mem_funIS3_yXadL_ZNKS3_13get_buyer_keyEvEEEEEENS4_ILy4589353585820744704ENS7_IS3_yXadL_ZNKS3_14get_seller_keyEvEEEEEENS4_ILy4580909293892277728ENS7_IS3_yXadL_ZNKS3_15get_deliver_keyEvEEEEEEEE31load_object_by_primary_iteratorEl
         (get_local $4)
         (call $db_find_i64
          (i64.load
           (get_local $4)
          )
          (i64.load offset=8
           (get_local $4)
          )
          (i64.const -6497942746098040832)
          (get_local $5)
         )
        )
       )
      )
      (get_local $4)
     )
     (i32.const 112)
    )
   )
   (i32.store
    (i32.add
     (get_local $2)
     (i32.const 120)
    )
    (get_local $3)
   )
  )
  (i32.store offset=4
   (get_local $0)
   (get_local $2)
  )
  (i32.store
   (get_local $0)
   (get_local $1)
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $10)
    (i32.const 16)
   )
  )
 )
 (func $_ZN5eosio11multi_indexILy11948801327611510784EN7rideEOS6Orders5orderEJNS_10indexed_byILy4580071945014837248EN5boost11multi_index13const_mem_funIS3_yXadL_ZNKS3_13get_buyer_keyEvEEEEEENS4_ILy4589353585820744704ENS7_IS3_yXadL_ZNKS3_14get_seller_keyEvEEEEEENS4_ILy4580909293892277728ENS7_IS3_yXadL_ZNKS3_15get_deliver_keyEvEEEEEEEE5indexILy4580071945014837248ES8_Ly0ELb0EE14const_iteratorppEv (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i64)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $9
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 16)
    )
   )
  )
  (call $eosio_assert
   (i32.ne
    (i32.load offset=4
     (get_local $0)
    )
    (i32.const 0)
   )
   (i32.const 880)
  )
  (block $label$0
   (br_if $label$0
    (i32.ne
     (tee_local $7
      (i32.load offset=120
       (tee_local $6
        (i32.load offset=4
         (get_local $0)
        )
       )
      )
     )
     (i32.const -1)
    )
   )
   (set_local $7
    (call $db_idx64_find_primary
     (i64.load
      (tee_local $7
       (i32.load
        (i32.load
         (get_local $0)
        )
       )
      )
     )
     (i64.load offset=8
      (get_local $7)
     )
     (i64.const -6497942746098040832)
     (i32.add
      (get_local $9)
      (i32.const 8)
     )
     (i64.load
      (get_local $6)
     )
    )
   )
   (i32.store offset=120
    (i32.load
     (i32.add
      (get_local $0)
      (i32.const 4)
     )
    )
    (get_local $7)
   )
  )
  (i64.store offset=8
   (get_local $9)
   (i64.const 0)
  )
  (block $label$1
   (block $label$2
    (block $label$3
     (block $label$4
      (br_if $label$4
       (i32.le_s
        (tee_local $1
         (call $db_idx64_next
          (get_local $7)
          (i32.add
           (get_local $9)
           (i32.const 8)
          )
         )
        )
        (i32.const -1)
       )
      )
      (set_local $3
       (i64.load offset=8
        (get_local $9)
       )
      )
      (block $label$5
       (br_if $label$5
        (i32.eq
         (tee_local $8
          (i32.load
           (i32.add
            (tee_local $2
             (i32.load
              (i32.load
               (get_local $0)
              )
             )
            )
            (i32.const 28)
           )
          )
         )
         (tee_local $4
          (i32.load offset=24
           (get_local $2)
          )
         )
        )
       )
       (set_local $7
        (i32.add
         (get_local $8)
         (i32.const -24)
        )
       )
       (set_local $5
        (i32.sub
         (i32.const 0)
         (get_local $4)
        )
       )
       (loop $label$6
        (br_if $label$5
         (i64.eq
          (i64.load
           (i32.load
            (get_local $7)
           )
          )
          (get_local $3)
         )
        )
        (set_local $8
         (get_local $7)
        )
        (set_local $7
         (tee_local $6
          (i32.add
           (get_local $7)
           (i32.const -24)
          )
         )
        )
        (br_if $label$6
         (i32.ne
          (i32.add
           (get_local $6)
           (get_local $5)
          )
          (i32.const -24)
         )
        )
       )
      )
      (br_if $label$3
       (i32.eq
        (get_local $8)
        (get_local $4)
       )
      )
      (call $eosio_assert
       (i32.eq
        (i32.load offset=112
         (tee_local $7
          (i32.load
           (i32.add
            (get_local $8)
            (i32.const -24)
           )
          )
         )
        )
        (get_local $2)
       )
       (i32.const 112)
      )
      (br $label$2)
     )
     (i32.store
      (i32.add
       (get_local $0)
       (i32.const 4)
      )
      (i32.const 0)
     )
     (br $label$1)
    )
    (call $eosio_assert
     (i32.eq
      (i32.load offset=112
       (tee_local $7
        (call $_ZNK5eosio11multi_indexILy11948801327611510784EN7rideEOS6Orders5orderEJNS_10indexed_byILy4580071945014837248EN5boost11multi_index13const_mem_funIS3_yXadL_ZNKS3_13get_buyer_keyEvEEEEEENS4_ILy4589353585820744704ENS7_IS3_yXadL_ZNKS3_14get_seller_keyEvEEEEEENS4_ILy4580909293892277728ENS7_IS3_yXadL_ZNKS3_15get_deliver_keyEvEEEEEEEE31load_object_by_primary_iteratorEl
         (get_local $2)
         (call $db_find_i64
          (i64.load
           (get_local $2)
          )
          (i64.load offset=8
           (get_local $2)
          )
          (i64.const -6497942746098040832)
          (get_local $3)
         )
        )
       )
      )
      (get_local $2)
     )
     (i32.const 112)
    )
   )
   (i32.store
    (i32.add
     (get_local $0)
     (i32.const 4)
    )
    (get_local $7)
   )
   (i32.store
    (i32.add
     (get_local $7)
     (i32.const 120)
    )
    (get_local $1)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $9)
    (i32.const 16)
   )
  )
  (get_local $0)
 )
 (func $_ZNK5eosio11multi_indexILy11948801327611510784EN7rideEOS6Orders5orderEJNS_10indexed_byILy4580071945014837248EN5boost11multi_index13const_mem_funIS3_yXadL_ZNKS3_13get_buyer_keyEvEEEEEENS4_ILy4589353585820744704ENS7_IS3_yXadL_ZNKS3_14get_seller_keyEvEEEEEENS4_ILy4580909293892277728ENS7_IS3_yXadL_ZNKS3_15get_deliver_keyEvEEEEEEEE3getEyPKc (param $0 i32) (param $1 i64) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (block $label$0
   (br_if $label$0
    (i32.eq
     (tee_local $7
      (i32.load
       (i32.add
        (get_local $0)
        (i32.const 28)
       )
      )
     )
     (tee_local $3
      (i32.load offset=24
       (get_local $0)
      )
     )
    )
   )
   (set_local $6
    (i32.add
     (get_local $7)
     (i32.const -24)
    )
   )
   (set_local $4
    (i32.sub
     (i32.const 0)
     (get_local $3)
    )
   )
   (loop $label$1
    (br_if $label$0
     (i64.eq
      (i64.load
       (i32.load
        (get_local $6)
       )
      )
      (get_local $1)
     )
    )
    (set_local $7
     (get_local $6)
    )
    (set_local $6
     (tee_local $5
      (i32.add
       (get_local $6)
       (i32.const -24)
      )
     )
    )
    (br_if $label$1
     (i32.ne
      (i32.add
       (get_local $5)
       (get_local $4)
      )
      (i32.const -24)
     )
    )
   )
  )
  (block $label$2
   (block $label$3
    (br_if $label$3
     (i32.eq
      (get_local $7)
      (get_local $3)
     )
    )
    (call $eosio_assert
     (i32.eq
      (i32.load offset=112
       (tee_local $6
        (i32.load
         (i32.add
          (get_local $7)
          (i32.const -24)
         )
        )
       )
      )
      (get_local $0)
     )
     (i32.const 112)
    )
    (br $label$2)
   )
   (set_local $6
    (i32.const 0)
   )
   (br_if $label$2
    (i32.lt_s
     (tee_local $5
      (call $db_find_i64
       (i64.load
        (get_local $0)
       )
       (i64.load offset=8
        (get_local $0)
       )
       (i64.const -6497942746098040832)
       (get_local $1)
      )
     )
     (i32.const 0)
    )
   )
   (call $eosio_assert
    (i32.eq
     (i32.load offset=112
      (tee_local $6
       (call $_ZNK5eosio11multi_indexILy11948801327611510784EN7rideEOS6Orders5orderEJNS_10indexed_byILy4580071945014837248EN5boost11multi_index13const_mem_funIS3_yXadL_ZNKS3_13get_buyer_keyEvEEEEEENS4_ILy4589353585820744704ENS7_IS3_yXadL_ZNKS3_14get_seller_keyEvEEEEEENS4_ILy4580909293892277728ENS7_IS3_yXadL_ZNKS3_15get_deliver_keyEvEEEEEEEE31load_object_by_primary_iteratorEl
        (get_local $0)
        (get_local $5)
       )
      )
     )
     (get_local $0)
    )
    (i32.const 112)
   )
  )
  (call $eosio_assert
   (i32.ne
    (get_local $6)
    (i32.const 0)
   )
   (get_local $2)
  )
  (get_local $6)
 )
 (func $_ZNK5eosio11multi_indexILy15426359243929812992EN7rideEOS5Users4userEJEE31load_object_by_primary_iteratorEl (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i64)
  (local $9 i32)
  (local $10 i32)
  (set_local $9
   (tee_local $10
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 48)
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (get_local $10)
  )
  (block $label$0
   (br_if $label$0
    (i32.eq
     (tee_local $7
      (i32.load
       (i32.add
        (get_local $0)
        (i32.const 28)
       )
      )
     )
     (tee_local $3
      (i32.load offset=24
       (get_local $0)
      )
     )
    )
   )
   (set_local $4
    (i32.sub
     (i32.const 0)
     (get_local $3)
    )
   )
   (set_local $6
    (i32.add
     (get_local $7)
     (i32.const -24)
    )
   )
   (loop $label$1
    (br_if $label$0
     (i32.eq
      (i32.load
       (i32.add
        (get_local $6)
        (i32.const 16)
       )
      )
      (get_local $1)
     )
    )
    (set_local $7
     (get_local $6)
    )
    (set_local $6
     (tee_local $5
      (i32.add
       (get_local $6)
       (i32.const -24)
      )
     )
    )
    (br_if $label$1
     (i32.ne
      (i32.add
       (get_local $5)
       (get_local $4)
      )
      (i32.const -24)
     )
    )
   )
  )
  (block $label$2
   (block $label$3
    (br_if $label$3
     (i32.eq
      (get_local $7)
      (get_local $3)
     )
    )
    (set_local $5
     (i32.load
      (i32.add
       (get_local $7)
       (i32.const -24)
      )
     )
    )
    (br $label$2)
   )
   (call $eosio_assert
    (i32.xor
     (i32.shr_u
      (tee_local $6
       (call $db_get_i64
        (get_local $1)
        (i32.const 0)
        (i32.const 0)
       )
      )
      (i32.const 31)
     )
     (i32.const 1)
    )
    (i32.const 496)
   )
   (block $label$4
    (block $label$5
     (br_if $label$5
      (i32.lt_u
       (get_local $6)
       (i32.const 513)
      )
     )
     (set_local $5
      (call $malloc
       (get_local $6)
      )
     )
     (br $label$4)
    )
    (i32.store offset=4
     (i32.const 0)
     (tee_local $5
      (i32.sub
       (get_local $10)
       (i32.and
        (i32.add
         (get_local $6)
         (i32.const 15)
        )
        (i32.const -16)
       )
      )
     )
    )
   )
   (drop
    (call $db_get_i64
     (get_local $1)
     (get_local $5)
     (get_local $6)
    )
   )
   (i32.store offset=36
    (get_local $9)
    (get_local $5)
   )
   (i32.store offset=32
    (get_local $9)
    (get_local $5)
   )
   (i32.store offset=40
    (get_local $9)
    (i32.add
     (get_local $5)
     (get_local $6)
    )
   )
   (block $label$6
    (br_if $label$6
     (i32.lt_u
      (get_local $6)
      (i32.const 513)
     )
    )
    (call $free
     (get_local $5)
    )
   )
   (set_local $2
    (i32.add
     (get_local $0)
     (i32.const 24)
    )
   )
   (i32.store offset=16
    (tee_local $5
     (call $_Znwj
      (i32.const 56)
     )
    )
    (i32.const 0)
   )
   (i64.store offset=8 align=4
    (get_local $5)
    (i64.const 0)
   )
   (i64.store offset=24
    (get_local $5)
    (i64.const 0)
   )
   (i64.store offset=32
    (get_local $5)
    (i64.const 1398362884)
   )
   (call $eosio_assert
    (i32.const 1)
    (i32.const 1296)
   )
   (set_local $4
    (i32.add
     (get_local $5)
     (i32.const 32)
    )
   )
   (set_local $3
    (i32.add
     (get_local $5)
     (i32.const 24)
    )
   )
   (set_local $10
    (i32.add
     (get_local $5)
     (i32.const 8)
    )
   )
   (set_local $8
    (i64.const 5462355)
   )
   (set_local $6
    (i32.const 0)
   )
   (block $label$7
    (block $label$8
     (loop $label$9
      (br_if $label$8
       (i32.gt_u
        (i32.add
         (i32.shl
          (i32.wrap/i64
           (get_local $8)
          )
          (i32.const 24)
         )
         (i32.const -1073741825)
        )
        (i32.const 452984830)
       )
      )
      (block $label$10
       (br_if $label$10
        (i64.ne
         (i64.and
          (tee_local $8
           (i64.shr_u
            (get_local $8)
            (i64.const 8)
           )
          )
          (i64.const 255)
         )
         (i64.const 0)
        )
       )
       (loop $label$11
        (br_if $label$8
         (i64.ne
          (i64.and
           (tee_local $8
            (i64.shr_u
             (get_local $8)
             (i64.const 8)
            )
           )
           (i64.const 255)
          )
          (i64.const 0)
         )
        )
        (br_if $label$11
         (i32.lt_s
          (tee_local $6
           (i32.add
            (get_local $6)
            (i32.const 1)
           )
          )
          (i32.const 7)
         )
        )
       )
      )
      (set_local $7
       (i32.const 1)
      )
      (br_if $label$9
       (i32.lt_s
        (tee_local $6
         (i32.add
          (get_local $6)
          (i32.const 1)
         )
        )
        (i32.const 7)
       )
      )
      (br $label$7)
     )
    )
    (set_local $7
     (i32.const 0)
    )
   )
   (call $eosio_assert
    (get_local $7)
    (i32.const 1360)
   )
   (i32.store offset=40
    (get_local $5)
    (get_local $0)
   )
   (call $eosio_assert
    (i32.gt_u
     (i32.sub
      (i32.load
       (i32.add
        (i32.add
         (get_local $9)
         (i32.const 32)
        )
        (i32.const 8)
       )
      )
      (tee_local $6
       (i32.load offset=36
        (get_local $9)
       )
      )
     )
     (i32.const 7)
    )
    (i32.const 528)
   )
   (drop
    (call $memcpy
     (get_local $5)
     (get_local $6)
     (i32.const 8)
    )
   )
   (i32.store offset=36
    (get_local $9)
    (i32.add
     (get_local $6)
     (i32.const 8)
    )
   )
   (call $eosio_assert
    (i32.gt_u
     (i32.sub
      (i32.load offset=8
       (tee_local $6
        (call $_ZN5eosiorsINS_10datastreamIPKcEEEERT_S6_RNSt3__112basic_stringIcNS7_11char_traitsIcEENS7_9allocatorIcEEEE
         (i32.add
          (get_local $9)
          (i32.const 32)
         )
         (get_local $10)
        )
       )
      )
      (i32.load offset=4
       (get_local $6)
      )
     )
     (i32.const 7)
    )
    (i32.const 528)
   )
   (drop
    (call $memcpy
     (get_local $3)
     (i32.load offset=4
      (get_local $6)
     )
     (i32.const 8)
    )
   )
   (i32.store offset=4
    (get_local $6)
    (tee_local $7
     (i32.add
      (i32.load offset=4
       (get_local $6)
      )
      (i32.const 8)
     )
    )
   )
   (call $eosio_assert
    (i32.gt_u
     (i32.sub
      (i32.load offset=8
       (get_local $6)
      )
      (get_local $7)
     )
     (i32.const 7)
    )
    (i32.const 528)
   )
   (drop
    (call $memcpy
     (get_local $4)
     (i32.load offset=4
      (get_local $6)
     )
     (i32.const 8)
    )
   )
   (i32.store offset=44
    (get_local $5)
    (get_local $1)
   )
   (i32.store offset=4
    (get_local $6)
    (i32.add
     (i32.load offset=4
      (get_local $6)
     )
     (i32.const 8)
    )
   )
   (i32.store offset=24
    (get_local $9)
    (get_local $5)
   )
   (i64.store offset=16
    (get_local $9)
    (tee_local $8
     (i64.load
      (get_local $5)
     )
    )
   )
   (i32.store offset=12
    (get_local $9)
    (tee_local $7
     (i32.load offset=44
      (get_local $5)
     )
    )
   )
   (block $label$12
    (block $label$13
     (br_if $label$13
      (i32.ge_u
       (tee_local $6
        (i32.load
         (tee_local $1
          (i32.add
           (get_local $0)
           (i32.const 28)
          )
         )
        )
       )
       (i32.load
        (i32.add
         (get_local $0)
         (i32.const 32)
        )
       )
      )
     )
     (i64.store offset=8
      (get_local $6)
      (get_local $8)
     )
     (i32.store offset=16
      (get_local $6)
      (get_local $7)
     )
     (i32.store offset=24
      (get_local $9)
      (i32.const 0)
     )
     (i32.store
      (get_local $6)
      (get_local $5)
     )
     (i32.store
      (get_local $1)
      (i32.add
       (get_local $6)
       (i32.const 24)
      )
     )
     (br $label$12)
    )
    (call $_ZNSt3__16vectorIN5eosio11multi_indexILy15426359243929812992EN7rideEOS5Users4userEJEE8item_ptrENS_9allocatorIS7_EEE24__emplace_back_slow_pathIJNS_10unique_ptrINS6_4itemENS_14default_deleteISD_EEEERyRlEEEvDpOT_
     (get_local $2)
     (i32.add
      (get_local $9)
      (i32.const 24)
     )
     (i32.add
      (get_local $9)
      (i32.const 16)
     )
     (i32.add
      (get_local $9)
      (i32.const 12)
     )
    )
   )
   (set_local $6
    (i32.load offset=24
     (get_local $9)
    )
   )
   (i32.store offset=24
    (get_local $9)
    (i32.const 0)
   )
   (br_if $label$2
    (i32.eqz
     (get_local $6)
    )
   )
   (block $label$14
    (br_if $label$14
     (i32.eqz
      (i32.and
       (i32.load8_u offset=8
        (get_local $6)
       )
       (i32.const 1)
      )
     )
    )
    (call $_ZdlPv
     (i32.load
      (i32.add
       (get_local $6)
       (i32.const 16)
      )
     )
    )
   )
   (call $_ZdlPv
    (get_local $6)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $9)
    (i32.const 48)
   )
  )
  (get_local $5)
 )
 (func $_ZZN5eosio11multi_indexILy11948801327611510784EN7rideEOS6Orders5orderEJNS_10indexed_byILy4580071945014837248EN5boost11multi_index13const_mem_funIS3_yXadL_ZNKS3_13get_buyer_keyEvEEEEEENS4_ILy4589353585820744704ENS7_IS3_yXadL_ZNKS3_14get_seller_keyEvEEEEEENS4_ILy4580909293892277728ENS7_IS3_yXadL_ZNKS3_15get_deliver_keyEvEEEEEEEE7emplaceIZNS2_10initializeEyyyE3$_0EENSE_14const_iteratorEyOT_ENKUlRSI_E_clINSE_4itemEEEDaSK_ (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i64)
  (local $7 i64)
  (local $8 i64)
  (local $9 i32)
  (local $10 i32)
  (set_local $9
   (tee_local $10
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 32)
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (get_local $10)
  )
  (set_local $2
   (i32.load
    (get_local $0)
   )
  )
  (block $label$0
   (br_if $label$0
    (i64.ne
     (tee_local $6
      (i64.load offset=16
       (tee_local $4
        (i32.load
         (tee_local $3
          (i32.load offset=4
           (get_local $0)
          )
         )
        )
       )
      )
     )
     (i64.const -1)
    )
   )
   (set_local $6
    (i64.const 0)
   )
   (block $label$1
    (br_if $label$1
     (i32.lt_s
      (tee_local $5
       (call $db_lowerbound_i64
        (i64.load
         (get_local $4)
        )
        (i64.load offset=8
         (get_local $4)
        )
        (i64.const -6497942746098040832)
        (i64.const 0)
       )
      )
      (i32.const 0)
     )
    )
    (drop
     (call $_ZNK5eosio11multi_indexILy11948801327611510784EN7rideEOS6Orders5orderEJNS_10indexed_byILy4580071945014837248EN5boost11multi_index13const_mem_funIS3_yXadL_ZNKS3_13get_buyer_keyEvEEEEEENS4_ILy4589353585820744704ENS7_IS3_yXadL_ZNKS3_14get_seller_keyEvEEEEEENS4_ILy4580909293892277728ENS7_IS3_yXadL_ZNKS3_15get_deliver_keyEvEEEEEEEE31load_object_by_primary_iteratorEl
      (get_local $4)
      (get_local $5)
     )
    )
    (i32.store offset=12
     (get_local $9)
     (i32.const 0)
    )
    (i32.store offset=8
     (get_local $9)
     (get_local $4)
    )
    (set_local $6
     (select
      (i64.const -2)
      (i64.add
       (tee_local $6
        (i64.load
         (i32.load offset=4
          (call $_ZN5eosio11multi_indexILy11948801327611510784EN7rideEOS6Orders5orderEJNS_10indexed_byILy4580071945014837248EN5boost11multi_index13const_mem_funIS3_yXadL_ZNKS3_13get_buyer_keyEvEEEEEENS4_ILy4589353585820744704ENS7_IS3_yXadL_ZNKS3_14get_seller_keyEvEEEEEENS4_ILy4580909293892277728ENS7_IS3_yXadL_ZNKS3_15get_deliver_keyEvEEEEEEEE14const_iteratormmEv
           (i32.add
            (get_local $9)
            (i32.const 8)
           )
          )
         )
        )
       )
       (i64.const 1)
      )
      (i64.gt_u
       (get_local $6)
       (i64.const -3)
      )
     )
    )
   )
   (i64.store
    (i32.add
     (get_local $4)
     (i32.const 16)
    )
    (get_local $6)
   )
  )
  (call $eosio_assert
   (i64.lt_u
    (get_local $6)
    (i64.const -2)
   )
   (i32.const 1120)
  )
  (i64.store
   (get_local $1)
   (i64.load
    (i32.add
     (get_local $4)
     (i32.const 16)
    )
   )
  )
  (i64.store offset=8
   (get_local $1)
   (i64.load
    (i32.load offset=4
     (get_local $3)
    )
   )
  )
  (i64.store offset=16
   (get_local $1)
   (i64.load
    (i32.load offset=8
     (get_local $3)
    )
   )
  )
  (set_local $6
   (i64.load
    (i32.load offset=12
     (get_local $3)
    )
   )
  )
  (i64.store offset=32
   (get_local $1)
   (i64.const 0)
  )
  (i64.store offset=24
   (get_local $1)
   (get_local $6)
  )
  (i64.store32 offset=40
   (get_local $1)
   (i64.div_u
    (call $current_time)
    (i64.const 1000000)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (tee_local $3
    (i32.add
     (tee_local $4
      (get_local $10)
     )
     (i32.const -112)
    )
   )
  )
  (i32.store offset=12
   (get_local $9)
   (get_local $3)
  )
  (i32.store offset=8
   (get_local $9)
   (get_local $3)
  )
  (i32.store offset=16
   (get_local $9)
   (i32.add
    (get_local $4)
    (i32.const -4)
   )
  )
  (drop
   (call $_ZN7rideEOSlsIN5eosio10datastreamIPcEEEERT_S6_RKNS_6Orders5orderE
    (i32.add
     (get_local $9)
     (i32.const 8)
    )
    (get_local $1)
   )
  )
  (i32.store offset=116
   (get_local $1)
   (call $db_store_i64
    (i64.load offset=8
     (get_local $2)
    )
    (i64.const -6497942746098040832)
    (i64.load
     (i32.load offset=8
      (get_local $0)
     )
    )
    (tee_local $6
     (i64.load
      (get_local $1)
     )
    )
    (get_local $3)
    (i32.const 108)
   )
  )
  (block $label$2
   (br_if $label$2
    (i64.lt_u
     (get_local $6)
     (i64.load offset=16
      (get_local $2)
     )
    )
   )
   (i64.store
    (i32.add
     (get_local $2)
     (i32.const 16)
    )
    (select
     (i64.const -2)
     (i64.add
      (get_local $6)
      (i64.const 1)
     )
     (i64.gt_u
      (get_local $6)
      (i64.const -3)
     )
    )
   )
  )
  (set_local $6
   (i64.load
    (tee_local $2
     (i32.add
      (get_local $2)
      (i32.const 8)
     )
    )
   )
  )
  (set_local $7
   (i64.load
    (tee_local $0
     (i32.load
      (i32.add
       (get_local $0)
       (i32.const 8)
      )
     )
    )
   )
  )
  (set_local $8
   (i64.load
    (get_local $1)
   )
  )
  (i64.store offset=24
   (get_local $9)
   (i64.load
    (i32.add
     (get_local $1)
     (i32.const 8)
    )
   )
  )
  (i32.store offset=120
   (get_local $1)
   (call $db_idx64_store
    (get_local $6)
    (i64.const -6497942746098040832)
    (get_local $7)
    (get_local $8)
    (i32.add
     (get_local $9)
     (i32.const 24)
    )
   )
  )
  (set_local $6
   (i64.load
    (get_local $0)
   )
  )
  (set_local $7
   (i64.load
    (get_local $2)
   )
  )
  (set_local $8
   (i64.load
    (get_local $1)
   )
  )
  (i64.store offset=24
   (get_local $9)
   (i64.load
    (i32.add
     (get_local $1)
     (i32.const 16)
    )
   )
  )
  (i32.store
   (i32.add
    (get_local $1)
    (i32.const 124)
   )
   (call $db_idx64_store
    (get_local $7)
    (i64.const -6497942746098040831)
    (get_local $6)
    (get_local $8)
    (i32.add
     (get_local $9)
     (i32.const 24)
    )
   )
  )
  (set_local $6
   (i64.load
    (get_local $0)
   )
  )
  (set_local $7
   (i64.load
    (get_local $2)
   )
  )
  (set_local $8
   (i64.load
    (get_local $1)
   )
  )
  (i64.store offset=24
   (get_local $9)
   (i64.load
    (i32.add
     (get_local $1)
     (i32.const 24)
    )
   )
  )
  (i32.store
   (i32.add
    (get_local $1)
    (i32.const 128)
   )
   (call $db_idx64_store
    (get_local $7)
    (i64.const -6497942746098040830)
    (get_local $6)
    (get_local $8)
    (i32.add
     (get_local $9)
     (i32.const 24)
    )
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $9)
    (i32.const 32)
   )
  )
 )
 (func $_ZN5eosio11multi_indexILy11948801327611510784EN7rideEOS6Orders5orderEJNS_10indexed_byILy4580071945014837248EN5boost11multi_index13const_mem_funIS3_yXadL_ZNKS3_13get_buyer_keyEvEEEEEENS4_ILy4589353585820744704ENS7_IS3_yXadL_ZNKS3_14get_seller_keyEvEEEEEENS4_ILy4580909293892277728ENS7_IS3_yXadL_ZNKS3_15get_deliver_keyEvEEEEEEEE14const_iteratormmEv (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $2
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 16)
    )
   )
  )
  (block $label$0
   (block $label$1
    (br_if $label$1
     (i32.eqz
      (tee_local $1
       (i32.load offset=4
        (get_local $0)
       )
      )
     )
    )
    (call $eosio_assert
     (i32.xor
      (i32.shr_u
       (tee_local $1
        (call $db_previous_i64
         (i32.load offset=116
          (get_local $1)
         )
         (i32.add
          (get_local $2)
          (i32.const 8)
         )
        )
       )
       (i32.const 31)
      )
      (i32.const 1)
     )
     (i32.const 1248)
    )
    (br $label$0)
   )
   (call $eosio_assert
    (i32.ne
     (tee_local $1
      (call $db_end_i64
       (i64.load
        (tee_local $1
         (i32.load
          (get_local $0)
         )
        )
       )
       (i64.load offset=8
        (get_local $1)
       )
       (i64.const -6497942746098040832)
      )
     )
     (i32.const -1)
    )
    (i32.const 1184)
   )
   (call $eosio_assert
    (i32.xor
     (i32.shr_u
      (tee_local $1
       (call $db_previous_i64
        (get_local $1)
        (i32.add
         (get_local $2)
         (i32.const 8)
        )
       )
      )
      (i32.const 31)
     )
     (i32.const 1)
    )
    (i32.const 1184)
   )
  )
  (i32.store
   (i32.add
    (get_local $0)
    (i32.const 4)
   )
   (call $_ZNK5eosio11multi_indexILy11948801327611510784EN7rideEOS6Orders5orderEJNS_10indexed_byILy4580071945014837248EN5boost11multi_index13const_mem_funIS3_yXadL_ZNKS3_13get_buyer_keyEvEEEEEENS4_ILy4589353585820744704ENS7_IS3_yXadL_ZNKS3_14get_seller_keyEvEEEEEENS4_ILy4580909293892277728ENS7_IS3_yXadL_ZNKS3_15get_deliver_keyEvEEEEEEEE31load_object_by_primary_iteratorEl
    (i32.load
     (get_local $0)
    )
    (get_local $1)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $2)
    (i32.const 16)
   )
  )
  (get_local $0)
 )
 (func $_ZN5eosiorsINS_10datastreamIPKcEEEERT_S6_RNSt3__112basic_stringIcNS7_11char_traitsIcEENS7_9allocatorIcEEEE (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $7
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 32)
    )
   )
  )
  (i32.store offset=24
   (get_local $7)
   (i32.const 0)
  )
  (i64.store offset=16
   (get_local $7)
   (i64.const 0)
  )
  (drop
   (call $_ZN5eosiorsINS_10datastreamIPKcEEEERT_S6_RNSt3__16vectorIcNS7_9allocatorIcEEEE
    (get_local $0)
    (i32.add
     (get_local $7)
     (i32.const 16)
    )
   )
  )
  (block $label$0
   (block $label$1
    (block $label$2
     (block $label$3
      (block $label$4
       (block $label$5
        (block $label$6
         (block $label$7
          (block $label$8
           (br_if $label$8
            (i32.ne
             (tee_local $5
              (i32.load offset=20
               (get_local $7)
              )
             )
             (tee_local $4
              (i32.load offset=16
               (get_local $7)
              )
             )
            )
           )
           (br_if $label$7
            (i32.and
             (i32.load8_u
              (get_local $1)
             )
             (i32.const 1)
            )
           )
           (i32.store16
            (get_local $1)
            (i32.const 0)
           )
           (set_local $4
            (i32.add
             (get_local $1)
             (i32.const 8)
            )
           )
           (br $label$6)
          )
          (i32.store
           (i32.add
            (get_local $7)
            (i32.const 8)
           )
           (i32.const 0)
          )
          (i64.store
           (get_local $7)
           (i64.const 0)
          )
          (br_if $label$0
           (i32.ge_u
            (tee_local $2
             (i32.sub
              (get_local $5)
              (get_local $4)
             )
            )
            (i32.const -16)
           )
          )
          (br_if $label$5
           (i32.ge_u
            (get_local $2)
            (i32.const 11)
           )
          )
          (i32.store8
           (get_local $7)
           (i32.shl
            (get_local $2)
            (i32.const 1)
           )
          )
          (set_local $6
           (i32.or
            (get_local $7)
            (i32.const 1)
           )
          )
          (br_if $label$4
           (get_local $2)
          )
          (br $label$3)
         )
         (i32.store8
          (i32.load offset=8
           (get_local $1)
          )
          (i32.const 0)
         )
         (i32.store offset=4
          (get_local $1)
          (i32.const 0)
         )
         (set_local $4
          (i32.add
           (get_local $1)
           (i32.const 8)
          )
         )
        )
        (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEj
         (get_local $1)
         (i32.const 0)
        )
        (i32.store
         (get_local $4)
         (i32.const 0)
        )
        (i64.store align=4
         (get_local $1)
         (i64.const 0)
        )
        (br_if $label$2
         (tee_local $4
          (i32.load offset=16
           (get_local $7)
          )
         )
        )
        (br $label$1)
       )
       (set_local $6
        (call $_Znwj
         (tee_local $5
          (i32.and
           (i32.add
            (get_local $2)
            (i32.const 16)
           )
           (i32.const -16)
          )
         )
        )
       )
       (i32.store
        (get_local $7)
        (i32.or
         (get_local $5)
         (i32.const 1)
        )
       )
       (i32.store offset=8
        (get_local $7)
        (get_local $6)
       )
       (i32.store offset=4
        (get_local $7)
        (get_local $2)
       )
      )
      (set_local $3
       (get_local $2)
      )
      (set_local $5
       (get_local $6)
      )
      (loop $label$9
       (i32.store8
        (get_local $5)
        (i32.load8_u
         (get_local $4)
        )
       )
       (set_local $5
        (i32.add
         (get_local $5)
         (i32.const 1)
        )
       )
       (set_local $4
        (i32.add
         (get_local $4)
         (i32.const 1)
        )
       )
       (br_if $label$9
        (tee_local $3
         (i32.add
          (get_local $3)
          (i32.const -1)
         )
        )
       )
      )
      (set_local $6
       (i32.add
        (get_local $6)
        (get_local $2)
       )
      )
     )
     (i32.store8
      (get_local $6)
      (i32.const 0)
     )
     (block $label$10
      (block $label$11
       (br_if $label$11
        (i32.and
         (i32.load8_u
          (get_local $1)
         )
         (i32.const 1)
        )
       )
       (i32.store16
        (get_local $1)
        (i32.const 0)
       )
       (br $label$10)
      )
      (i32.store8
       (i32.load offset=8
        (get_local $1)
       )
       (i32.const 0)
      )
      (i32.store offset=4
       (get_local $1)
       (i32.const 0)
      )
     )
     (call $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEj
      (get_local $1)
      (i32.const 0)
     )
     (i32.store
      (i32.add
       (get_local $1)
       (i32.const 8)
      )
      (i32.load
       (i32.add
        (get_local $7)
        (i32.const 8)
       )
      )
     )
     (i64.store align=4
      (get_local $1)
      (i64.load
       (get_local $7)
      )
     )
     (br_if $label$1
      (i32.eqz
       (tee_local $4
        (i32.load offset=16
         (get_local $7)
        )
       )
      )
     )
    )
    (i32.store offset=20
     (get_local $7)
     (get_local $4)
    )
    (call $_ZdlPv
     (get_local $4)
    )
   )
   (i32.store offset=4
    (i32.const 0)
    (i32.add
     (get_local $7)
     (i32.const 32)
    )
   )
   (return
    (get_local $0)
   )
  )
  (call $_ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv
   (get_local $7)
  )
  (unreachable)
 )
 (func $_ZNSt3__16vectorIN5eosio11multi_indexILy15426359243929812992EN7rideEOS5Users4userEJEE8item_ptrENS_9allocatorIS7_EEE24__emplace_back_slow_pathIJNS_10unique_ptrINS6_4itemENS_14default_deleteISD_EEEERyRlEEEvDpOT_ (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (block $label$0
   (block $label$1
    (br_if $label$1
     (i32.ge_u
      (tee_local $5
       (i32.add
        (tee_local $4
         (i32.div_s
          (i32.sub
           (i32.load offset=4
            (get_local $0)
           )
           (tee_local $6
            (i32.load
             (get_local $0)
            )
           )
          )
          (i32.const 24)
         )
        )
        (i32.const 1)
       )
      )
      (i32.const 178956971)
     )
    )
    (set_local $7
     (i32.const 178956970)
    )
    (block $label$2
     (block $label$3
      (br_if $label$3
       (i32.gt_u
        (tee_local $6
         (i32.div_s
          (i32.sub
           (i32.load offset=8
            (get_local $0)
           )
           (get_local $6)
          )
          (i32.const 24)
         )
        )
        (i32.const 89478484)
       )
      )
      (br_if $label$2
       (i32.eqz
        (tee_local $7
         (select
          (get_local $5)
          (tee_local $7
           (i32.shl
            (get_local $6)
            (i32.const 1)
           )
          )
          (i32.lt_u
           (get_local $7)
           (get_local $5)
          )
         )
        )
       )
      )
     )
     (set_local $6
      (call $_Znwj
       (i32.mul
        (get_local $7)
        (i32.const 24)
       )
      )
     )
     (br $label$0)
    )
    (set_local $7
     (i32.const 0)
    )
    (set_local $6
     (i32.const 0)
    )
    (br $label$0)
   )
   (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
    (get_local $0)
   )
   (unreachable)
  )
  (set_local $5
   (i32.load
    (get_local $1)
   )
  )
  (i32.store
   (get_local $1)
   (i32.const 0)
  )
  (i32.store
   (tee_local $1
    (i32.add
     (get_local $6)
     (i32.mul
      (get_local $4)
      (i32.const 24)
     )
    )
   )
   (get_local $5)
  )
  (i64.store offset=8
   (get_local $1)
   (i64.load
    (get_local $2)
   )
  )
  (i32.store offset=16
   (get_local $1)
   (i32.load
    (get_local $3)
   )
  )
  (set_local $4
   (i32.add
    (get_local $6)
    (i32.mul
     (get_local $7)
     (i32.const 24)
    )
   )
  )
  (set_local $5
   (i32.add
    (get_local $1)
    (i32.const 24)
   )
  )
  (block $label$4
   (block $label$5
    (br_if $label$5
     (i32.eq
      (tee_local $6
       (i32.load
        (i32.add
         (get_local $0)
         (i32.const 4)
        )
       )
      )
      (tee_local $7
       (i32.load
        (get_local $0)
       )
      )
     )
    )
    (loop $label$6
     (set_local $3
      (i32.load
       (tee_local $2
        (i32.add
         (get_local $6)
         (i32.const -24)
        )
       )
      )
     )
     (i32.store
      (get_local $2)
      (i32.const 0)
     )
     (i32.store
      (i32.add
       (get_local $1)
       (i32.const -24)
      )
      (get_local $3)
     )
     (i32.store
      (i32.add
       (get_local $1)
       (i32.const -8)
      )
      (i32.load
       (i32.add
        (get_local $6)
        (i32.const -8)
       )
      )
     )
     (i32.store
      (i32.add
       (get_local $1)
       (i32.const -12)
      )
      (i32.load
       (i32.add
        (get_local $6)
        (i32.const -12)
       )
      )
     )
     (i32.store
      (i32.add
       (get_local $1)
       (i32.const -16)
      )
      (i32.load
       (i32.add
        (get_local $6)
        (i32.const -16)
       )
      )
     )
     (set_local $1
      (i32.add
       (get_local $1)
       (i32.const -24)
      )
     )
     (set_local $6
      (get_local $2)
     )
     (br_if $label$6
      (i32.ne
       (get_local $7)
       (get_local $2)
      )
     )
    )
    (set_local $7
     (i32.load
      (i32.add
       (get_local $0)
       (i32.const 4)
      )
     )
    )
    (set_local $6
     (i32.load
      (get_local $0)
     )
    )
    (br $label$4)
   )
   (set_local $6
    (get_local $7)
   )
  )
  (i32.store
   (get_local $0)
   (get_local $1)
  )
  (i32.store
   (i32.add
    (get_local $0)
    (i32.const 4)
   )
   (get_local $5)
  )
  (i32.store
   (i32.add
    (get_local $0)
    (i32.const 8)
   )
   (get_local $4)
  )
  (block $label$7
   (br_if $label$7
    (i32.eq
     (get_local $7)
     (get_local $6)
    )
   )
   (loop $label$8
    (set_local $1
     (i32.load
      (tee_local $7
       (i32.add
        (get_local $7)
        (i32.const -24)
       )
      )
     )
    )
    (i32.store
     (get_local $7)
     (i32.const 0)
    )
    (block $label$9
     (br_if $label$9
      (i32.eqz
       (get_local $1)
      )
     )
     (block $label$10
      (br_if $label$10
       (i32.eqz
        (i32.and
         (i32.load8_u offset=8
          (get_local $1)
         )
         (i32.const 1)
        )
       )
      )
      (call $_ZdlPv
       (i32.load
        (i32.add
         (get_local $1)
         (i32.const 16)
        )
       )
      )
     )
     (call $_ZdlPv
      (get_local $1)
     )
    )
    (br_if $label$8
     (i32.ne
      (get_local $6)
      (get_local $7)
     )
    )
   )
  )
  (block $label$11
   (br_if $label$11
    (i32.eqz
     (get_local $6)
    )
   )
   (call $_ZdlPv
    (get_local $6)
   )
  )
 )
 (func $_ZN5eosiorsINS_10datastreamIPKcEEEERT_S6_RNSt3__16vectorIcNS7_9allocatorIcEEEE (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i64)
  (local $7 i32)
  (set_local $5
   (i32.load offset=4
    (get_local $0)
   )
  )
  (set_local $7
   (i32.const 0)
  )
  (set_local $6
   (i64.const 0)
  )
  (set_local $2
   (i32.add
    (get_local $0)
    (i32.const 8)
   )
  )
  (set_local $3
   (i32.add
    (get_local $0)
    (i32.const 4)
   )
  )
  (loop $label$0
   (call $eosio_assert
    (i32.lt_u
     (get_local $5)
     (i32.load
      (get_local $2)
     )
    )
    (i32.const 1392)
   )
   (set_local $4
    (i32.load8_u
     (tee_local $5
      (i32.load
       (get_local $3)
      )
     )
    )
   )
   (i32.store
    (get_local $3)
    (tee_local $5
     (i32.add
      (get_local $5)
      (i32.const 1)
     )
    )
   )
   (set_local $6
    (i64.or
     (i64.extend_u/i32
      (i32.shl
       (i32.and
        (get_local $4)
        (i32.const 127)
       )
       (tee_local $7
        (i32.and
         (get_local $7)
         (i32.const 255)
        )
       )
      )
     )
     (get_local $6)
    )
   )
   (set_local $7
    (i32.add
     (get_local $7)
     (i32.const 7)
    )
   )
   (br_if $label$0
    (i32.shr_u
     (get_local $4)
     (i32.const 7)
    )
   )
  )
  (block $label$1
   (block $label$2
    (br_if $label$2
     (i32.le_u
      (tee_local $3
       (i32.wrap/i64
        (get_local $6)
       )
      )
      (tee_local $2
       (i32.sub
        (tee_local $7
         (i32.load offset=4
          (get_local $1)
         )
        )
        (tee_local $4
         (i32.load
          (get_local $1)
         )
        )
       )
      )
     )
    )
    (call $_ZNSt3__16vectorIcNS_9allocatorIcEEE8__appendEj
     (get_local $1)
     (i32.sub
      (get_local $3)
      (get_local $2)
     )
    )
    (set_local $5
     (i32.load
      (i32.add
       (get_local $0)
       (i32.const 4)
      )
     )
    )
    (set_local $7
     (i32.load
      (i32.add
       (get_local $1)
       (i32.const 4)
      )
     )
    )
    (set_local $4
     (i32.load
      (get_local $1)
     )
    )
    (br $label$1)
   )
   (br_if $label$1
    (i32.ge_u
     (get_local $3)
     (get_local $2)
    )
   )
   (i32.store
    (i32.add
     (get_local $1)
     (i32.const 4)
    )
    (tee_local $7
     (i32.add
      (get_local $4)
      (get_local $3)
     )
    )
   )
  )
  (call $eosio_assert
   (i32.ge_u
    (i32.sub
     (i32.load
      (i32.add
       (get_local $0)
       (i32.const 8)
      )
     )
     (get_local $5)
    )
    (tee_local $5
     (i32.sub
      (get_local $7)
      (get_local $4)
     )
    )
   )
   (i32.const 528)
  )
  (drop
   (call $memcpy
    (get_local $4)
    (i32.load
     (tee_local $7
      (i32.add
       (get_local $0)
       (i32.const 4)
      )
     )
    )
    (get_local $5)
   )
  )
  (i32.store
   (get_local $7)
   (i32.add
    (i32.load
     (get_local $7)
    )
    (get_local $5)
   )
  )
  (get_local $0)
 )
 (func $_ZNSt3__16vectorIcNS_9allocatorIcEEE8__appendEj (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (block $label$0
   (block $label$1
    (block $label$2
     (block $label$3
      (block $label$4
       (br_if $label$4
        (i32.ge_u
         (i32.sub
          (tee_local $2
           (i32.load offset=8
            (get_local $0)
           )
          )
          (tee_local $6
           (i32.load offset=4
            (get_local $0)
           )
          )
         )
         (get_local $1)
        )
       )
       (br_if $label$2
        (i32.le_s
         (tee_local $4
          (i32.add
           (tee_local $3
            (i32.sub
             (get_local $6)
             (tee_local $5
              (i32.load
               (get_local $0)
              )
             )
            )
           )
           (get_local $1)
          )
         )
         (i32.const -1)
        )
       )
       (set_local $6
        (i32.const 2147483647)
       )
       (block $label$5
        (br_if $label$5
         (i32.gt_u
          (tee_local $2
           (i32.sub
            (get_local $2)
            (get_local $5)
           )
          )
          (i32.const 1073741822)
         )
        )
        (br_if $label$3
         (i32.eqz
          (tee_local $6
           (select
            (get_local $4)
            (tee_local $6
             (i32.shl
              (get_local $2)
              (i32.const 1)
             )
            )
            (i32.lt_u
             (get_local $6)
             (get_local $4)
            )
           )
          )
         )
        )
       )
       (set_local $2
        (call $_Znwj
         (get_local $6)
        )
       )
       (br $label$1)
      )
      (set_local $0
       (i32.add
        (get_local $0)
        (i32.const 4)
       )
      )
      (loop $label$6
       (i32.store8
        (get_local $6)
        (i32.const 0)
       )
       (i32.store
        (get_local $0)
        (tee_local $6
         (i32.add
          (i32.load
           (get_local $0)
          )
          (i32.const 1)
         )
        )
       )
       (br_if $label$6
        (tee_local $1
         (i32.add
          (get_local $1)
          (i32.const -1)
         )
        )
       )
       (br $label$0)
      )
     )
     (set_local $6
      (i32.const 0)
     )
     (set_local $2
      (i32.const 0)
     )
     (br $label$1)
    )
    (call $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv
     (get_local $0)
    )
    (unreachable)
   )
   (set_local $4
    (i32.add
     (get_local $2)
     (get_local $6)
    )
   )
   (set_local $6
    (tee_local $5
     (i32.add
      (get_local $2)
      (get_local $3)
     )
    )
   )
   (loop $label$7
    (i32.store8
     (get_local $6)
     (i32.const 0)
    )
    (set_local $6
     (i32.add
      (get_local $6)
      (i32.const 1)
     )
    )
    (br_if $label$7
     (tee_local $1
      (i32.add
       (get_local $1)
       (i32.const -1)
      )
     )
    )
   )
   (set_local $5
    (i32.sub
     (get_local $5)
     (tee_local $2
      (i32.sub
       (i32.load
        (tee_local $3
         (i32.add
          (get_local $0)
          (i32.const 4)
         )
        )
       )
       (tee_local $1
        (i32.load
         (get_local $0)
        )
       )
      )
     )
    )
   )
   (block $label$8
    (br_if $label$8
     (i32.lt_s
      (get_local $2)
      (i32.const 1)
     )
    )
    (drop
     (call $memcpy
      (get_local $5)
      (get_local $1)
      (get_local $2)
     )
    )
    (set_local $1
     (i32.load
      (get_local $0)
     )
    )
   )
   (i32.store
    (get_local $0)
    (get_local $5)
   )
   (i32.store
    (get_local $3)
    (get_local $6)
   )
   (i32.store
    (i32.add
     (get_local $0)
     (i32.const 8)
    )
    (get_local $4)
   )
   (br_if $label$0
    (i32.eqz
     (get_local $1)
    )
   )
   (call $_ZdlPv
    (get_local $1)
   )
   (return)
  )
 )
 (func $_ZN7rideEOS8is_equalERK11checksum256S2_ (param $0 i32) (param $1 i32) (result i32)
  (i32.eqz
   (call $memcmp
    (get_local $0)
    (get_local $1)
    (i32.const 32)
   )
  )
 )
 (func $_ZN7rideEOS7is_zeroERK11checksum256 (param $0 i32) (result i32)
  (local $1 i32)
  (set_local $1
   (i32.const 0)
  )
  (block $label$0
   (br_if $label$0
    (i64.ne
     (i64.load
      (get_local $0)
     )
     (i64.const 0)
    )
   )
   (br_if $label$0
    (i64.ne
     (i64.load offset=8
      (get_local $0)
     )
     (i64.const 0)
    )
   )
   (br_if $label$0
    (i64.ne
     (i64.load offset=16
      (get_local $0)
     )
     (i64.const 0)
    )
   )
   (set_local $1
    (i64.eqz
     (i64.load offset=24
      (get_local $0)
     )
    )
   )
  )
  (get_local $1)
 )
 (func $malloc (param $0 i32) (result i32)
  (call $_ZN5eosio14memory_manager6mallocEm
   (i32.const 1396)
   (get_local $0)
  )
 )
 (func $_ZN5eosio14memory_manager6mallocEm (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (block $label$0
   (br_if $label$0
    (i32.eqz
     (get_local $1)
    )
   )
   (block $label$1
    (br_if $label$1
     (tee_local $13
      (i32.load offset=8384
       (get_local $0)
      )
     )
    )
    (set_local $13
     (i32.const 16)
    )
    (i32.store
     (i32.add
      (get_local $0)
      (i32.const 8384)
     )
     (i32.const 16)
    )
   )
   (set_local $2
    (select
     (i32.sub
      (i32.add
       (get_local $1)
       (i32.const 8)
      )
      (tee_local $2
       (i32.and
        (i32.add
         (get_local $1)
         (i32.const 4)
        )
        (i32.const 7)
       )
      )
     )
     (get_local $1)
     (get_local $2)
    )
   )
   (block $label$2
    (block $label$3
     (block $label$4
      (br_if $label$4
       (i32.ge_u
        (tee_local $10
         (i32.load offset=8388
          (get_local $0)
         )
        )
        (get_local $13)
       )
      )
      (set_local $1
       (i32.add
        (i32.add
         (get_local $0)
         (i32.mul
          (get_local $10)
          (i32.const 12)
         )
        )
        (i32.const 8192)
       )
      )
      (block $label$5
       (br_if $label$5
        (get_local $10)
       )
       (br_if $label$5
        (i32.load
         (tee_local $13
          (i32.add
           (get_local $0)
           (i32.const 8196)
          )
         )
        )
       )
       (i32.store
        (get_local $1)
        (i32.const 8192)
       )
       (i32.store
        (get_local $13)
        (get_local $0)
       )
      )
      (set_local $10
       (i32.add
        (get_local $2)
        (i32.const 4)
       )
      )
      (loop $label$6
       (block $label$7
        (br_if $label$7
         (i32.gt_u
          (i32.add
           (tee_local $13
            (i32.load offset=8
             (get_local $1)
            )
           )
           (get_local $10)
          )
          (i32.load
           (get_local $1)
          )
         )
        )
        (i32.store
         (tee_local $13
          (i32.add
           (i32.load offset=4
            (get_local $1)
           )
           (get_local $13)
          )
         )
         (i32.or
          (i32.and
           (i32.load
            (get_local $13)
           )
           (i32.const -2147483648)
          )
          (get_local $2)
         )
        )
        (i32.store
         (tee_local $1
          (i32.add
           (get_local $1)
           (i32.const 8)
          )
         )
         (i32.add
          (i32.load
           (get_local $1)
          )
          (get_local $10)
         )
        )
        (i32.store
         (get_local $13)
         (i32.or
          (i32.load
           (get_local $13)
          )
          (i32.const -2147483648)
         )
        )
        (br_if $label$3
         (tee_local $1
          (i32.add
           (get_local $13)
           (i32.const 4)
          )
         )
        )
       )
       (br_if $label$6
        (tee_local $1
         (call $_ZN5eosio14memory_manager16next_active_heapEv
          (get_local $0)
         )
        )
       )
      )
     )
     (set_local $4
      (i32.sub
       (i32.const 2147483644)
       (get_local $2)
      )
     )
     (set_local $11
      (i32.add
       (get_local $0)
       (i32.const 8392)
      )
     )
     (set_local $12
      (i32.add
       (get_local $0)
       (i32.const 8384)
      )
     )
     (set_local $13
      (tee_local $3
       (i32.load offset=8392
        (get_local $0)
       )
      )
     )
     (loop $label$8
      (call $eosio_assert
       (i32.eq
        (i32.load
         (i32.add
          (tee_local $1
           (i32.add
            (get_local $0)
            (i32.mul
             (get_local $13)
             (i32.const 12)
            )
           )
          )
          (i32.const 8200)
         )
        )
        (i32.load
         (tee_local $5
          (i32.add
           (get_local $1)
           (i32.const 8192)
          )
         )
        )
       )
       (i32.const 9792)
      )
      (set_local $13
       (i32.add
        (tee_local $6
         (i32.load
          (i32.add
           (get_local $1)
           (i32.const 8196)
          )
         )
        )
        (i32.const 4)
       )
      )
      (loop $label$9
       (set_local $7
        (i32.add
         (get_local $6)
         (i32.load
          (get_local $5)
         )
        )
       )
       (set_local $1
        (i32.and
         (tee_local $9
          (i32.load
           (tee_local $8
            (i32.add
             (get_local $13)
             (i32.const -4)
            )
           )
          )
         )
         (i32.const 2147483647)
        )
       )
       (block $label$10
        (br_if $label$10
         (i32.lt_s
          (get_local $9)
          (i32.const 0)
         )
        )
        (block $label$11
         (br_if $label$11
          (i32.ge_u
           (get_local $1)
           (get_local $2)
          )
         )
         (loop $label$12
          (br_if $label$11
           (i32.ge_u
            (tee_local $10
             (i32.add
              (get_local $13)
              (get_local $1)
             )
            )
            (get_local $7)
           )
          )
          (br_if $label$11
           (i32.lt_s
            (tee_local $10
             (i32.load
              (get_local $10)
             )
            )
            (i32.const 0)
           )
          )
          (br_if $label$12
           (i32.lt_u
            (tee_local $1
             (i32.add
              (i32.add
               (get_local $1)
               (i32.and
                (get_local $10)
                (i32.const 2147483647)
               )
              )
              (i32.const 4)
             )
            )
            (get_local $2)
           )
          )
         )
        )
        (i32.store
         (get_local $8)
         (i32.or
          (select
           (get_local $1)
           (get_local $2)
           (i32.lt_u
            (get_local $1)
            (get_local $2)
           )
          )
          (i32.and
           (get_local $9)
           (i32.const -2147483648)
          )
         )
        )
        (block $label$13
         (br_if $label$13
          (i32.le_u
           (get_local $1)
           (get_local $2)
          )
         )
         (i32.store
          (i32.add
           (get_local $13)
           (get_local $2)
          )
          (i32.and
           (i32.add
            (get_local $4)
            (get_local $1)
           )
           (i32.const 2147483647)
          )
         )
        )
        (br_if $label$2
         (i32.ge_u
          (get_local $1)
          (get_local $2)
         )
        )
       )
       (br_if $label$9
        (i32.lt_u
         (tee_local $13
          (i32.add
           (i32.add
            (get_local $13)
            (get_local $1)
           )
           (i32.const 4)
          )
         )
         (get_local $7)
        )
       )
      )
      (set_local $1
       (i32.const 0)
      )
      (i32.store
       (get_local $11)
       (tee_local $13
        (select
         (i32.const 0)
         (tee_local $13
          (i32.add
           (i32.load
            (get_local $11)
           )
           (i32.const 1)
          )
         )
         (i32.eq
          (get_local $13)
          (i32.load
           (get_local $12)
          )
         )
        )
       )
      )
      (br_if $label$8
       (i32.ne
        (get_local $13)
        (get_local $3)
       )
      )
     )
    )
    (return
     (get_local $1)
    )
   )
   (i32.store
    (get_local $8)
    (i32.or
     (i32.load
      (get_local $8)
     )
     (i32.const -2147483648)
    )
   )
   (return
    (get_local $13)
   )
  )
  (i32.const 0)
 )
 (func $_ZN5eosio14memory_manager16next_active_heapEv (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (set_local $1
   (i32.load offset=8388
    (get_local $0)
   )
  )
  (block $label$0
   (block $label$1
    (br_if $label$1
     (i32.eqz
      (i32.load8_u offset=9878
       (i32.const 0)
      )
     )
    )
    (set_local $7
     (i32.load offset=9880
      (i32.const 0)
     )
    )
    (br $label$0)
   )
   (set_local $7
    (current_memory)
   )
   (i32.store8 offset=9878
    (i32.const 0)
    (i32.const 1)
   )
   (i32.store offset=9880
    (i32.const 0)
    (tee_local $7
     (i32.shl
      (get_local $7)
      (i32.const 16)
     )
    )
   )
  )
  (set_local $3
   (get_local $7)
  )
  (block $label$2
   (block $label$3
    (block $label$4
     (block $label$5
      (br_if $label$5
       (i32.le_u
        (tee_local $2
         (i32.shr_u
          (i32.add
           (get_local $7)
           (i32.const 65535)
          )
          (i32.const 16)
         )
        )
        (tee_local $8
         (current_memory)
        )
       )
      )
      (drop
       (grow_memory
        (i32.sub
         (get_local $2)
         (get_local $8)
        )
       )
      )
      (set_local $8
       (i32.const 0)
      )
      (br_if $label$4
       (i32.ne
        (get_local $2)
        (current_memory)
       )
      )
      (set_local $3
       (i32.load offset=9880
        (i32.const 0)
       )
      )
     )
     (set_local $8
      (i32.const 0)
     )
     (i32.store offset=9880
      (i32.const 0)
      (get_local $3)
     )
     (br_if $label$4
      (i32.lt_s
       (get_local $7)
       (i32.const 0)
      )
     )
     (set_local $2
      (i32.add
       (get_local $0)
       (i32.mul
        (get_local $1)
        (i32.const 12)
       )
      )
     )
     (set_local $7
      (i32.sub
       (i32.sub
        (i32.add
         (get_local $7)
         (select
          (i32.const 65536)
          (i32.const 131072)
          (tee_local $6
           (i32.lt_u
            (tee_local $8
             (i32.and
              (get_local $7)
              (i32.const 65535)
             )
            )
            (i32.const 64513)
           )
          )
         )
        )
        (select
         (get_local $8)
         (i32.and
          (get_local $7)
          (i32.const 131071)
         )
         (get_local $6)
        )
       )
       (get_local $7)
      )
     )
     (block $label$6
      (br_if $label$6
       (i32.load8_u offset=9878
        (i32.const 0)
       )
      )
      (set_local $3
       (current_memory)
      )
      (i32.store8 offset=9878
       (i32.const 0)
       (i32.const 1)
      )
      (i32.store offset=9880
       (i32.const 0)
       (tee_local $3
        (i32.shl
         (get_local $3)
         (i32.const 16)
        )
       )
      )
     )
     (set_local $2
      (i32.add
       (get_local $2)
       (i32.const 8192)
      )
     )
     (br_if $label$3
      (i32.lt_s
       (get_local $7)
       (i32.const 0)
      )
     )
     (set_local $6
      (get_local $3)
     )
     (block $label$7
      (br_if $label$7
       (i32.le_u
        (tee_local $8
         (i32.shr_u
          (i32.add
           (i32.add
            (tee_local $5
             (i32.and
              (i32.add
               (get_local $7)
               (i32.const 7)
              )
              (i32.const -8)
             )
            )
            (get_local $3)
           )
           (i32.const 65535)
          )
          (i32.const 16)
         )
        )
        (tee_local $4
         (current_memory)
        )
       )
      )
      (drop
       (grow_memory
        (i32.sub
         (get_local $8)
         (get_local $4)
        )
       )
      )
      (br_if $label$3
       (i32.ne
        (get_local $8)
        (current_memory)
       )
      )
      (set_local $6
       (i32.load offset=9880
        (i32.const 0)
       )
      )
     )
     (i32.store offset=9880
      (i32.const 0)
      (i32.add
       (get_local $6)
       (get_local $5)
      )
     )
     (br_if $label$3
      (i32.eq
       (get_local $3)
       (i32.const -1)
      )
     )
     (br_if $label$2
      (i32.eq
       (i32.add
        (tee_local $6
         (i32.load
          (i32.add
           (tee_local $1
            (i32.add
             (get_local $0)
             (i32.mul
              (get_local $1)
              (i32.const 12)
             )
            )
           )
           (i32.const 8196)
          )
         )
        )
        (tee_local $8
         (i32.load
          (get_local $2)
         )
        )
       )
       (get_local $3)
      )
     )
     (block $label$8
      (br_if $label$8
       (i32.eq
        (get_local $8)
        (tee_local $1
         (i32.load
          (tee_local $5
           (i32.add
            (get_local $1)
            (i32.const 8200)
           )
          )
         )
        )
       )
      )
      (i32.store
       (tee_local $6
        (i32.add
         (get_local $6)
         (get_local $1)
        )
       )
       (i32.or
        (i32.and
         (i32.load
          (get_local $6)
         )
         (i32.const -2147483648)
        )
        (i32.add
         (i32.sub
          (i32.const -4)
          (get_local $1)
         )
         (get_local $8)
        )
       )
      )
      (i32.store
       (get_local $5)
       (i32.load
        (get_local $2)
       )
      )
      (i32.store
       (get_local $6)
       (i32.and
        (i32.load
         (get_local $6)
        )
        (i32.const 2147483647)
       )
      )
     )
     (i32.store
      (tee_local $2
       (i32.add
        (get_local $0)
        (i32.const 8388)
       )
      )
      (tee_local $2
       (i32.add
        (i32.load
         (get_local $2)
        )
        (i32.const 1)
       )
      )
     )
     (i32.store
      (i32.add
       (tee_local $0
        (i32.add
         (get_local $0)
         (i32.mul
          (get_local $2)
          (i32.const 12)
         )
        )
       )
       (i32.const 8196)
      )
      (get_local $3)
     )
     (i32.store
      (tee_local $8
       (i32.add
        (get_local $0)
        (i32.const 8192)
       )
      )
      (get_local $7)
     )
    )
    (return
     (get_local $8)
    )
   )
   (block $label$9
    (br_if $label$9
     (i32.eq
      (tee_local $8
       (i32.load
        (get_local $2)
       )
      )
      (tee_local $7
       (i32.load
        (tee_local $1
         (i32.add
          (tee_local $3
           (i32.add
            (get_local $0)
            (i32.mul
             (get_local $1)
             (i32.const 12)
            )
           )
          )
          (i32.const 8200)
         )
        )
       )
      )
     )
    )
    (i32.store
     (tee_local $3
      (i32.add
       (i32.load
        (i32.add
         (get_local $3)
         (i32.const 8196)
        )
       )
       (get_local $7)
      )
     )
     (i32.or
      (i32.and
       (i32.load
        (get_local $3)
       )
       (i32.const -2147483648)
      )
      (i32.add
       (i32.sub
        (i32.const -4)
        (get_local $7)
       )
       (get_local $8)
      )
     )
    )
    (i32.store
     (get_local $1)
     (i32.load
      (get_local $2)
     )
    )
    (i32.store
     (get_local $3)
     (i32.and
      (i32.load
       (get_local $3)
      )
      (i32.const 2147483647)
     )
    )
   )
   (i32.store offset=8384
    (get_local $0)
    (tee_local $3
     (i32.add
      (i32.load
       (tee_local $7
        (i32.add
         (get_local $0)
         (i32.const 8388)
        )
       )
      )
      (i32.const 1)
     )
    )
   )
   (i32.store
    (get_local $7)
    (get_local $3)
   )
   (return
    (i32.const 0)
   )
  )
  (i32.store
   (get_local $2)
   (i32.add
    (get_local $8)
    (get_local $7)
   )
  )
  (get_local $2)
 )
 (func $free (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (block $label$0
   (block $label$1
    (br_if $label$1
     (i32.eqz
      (get_local $0)
     )
    )
    (br_if $label$1
     (i32.lt_s
      (tee_local $2
       (i32.load offset=9780
        (i32.const 0)
       )
      )
      (i32.const 1)
     )
    )
    (set_local $3
     (i32.const 9588)
    )
    (set_local $1
     (i32.add
      (i32.mul
       (get_local $2)
       (i32.const 12)
      )
      (i32.const 9588)
     )
    )
    (loop $label$2
     (br_if $label$1
      (i32.eqz
       (tee_local $2
        (i32.load
         (i32.add
          (get_local $3)
          (i32.const 4)
         )
        )
       )
      )
     )
     (block $label$3
      (br_if $label$3
       (i32.gt_u
        (i32.add
         (get_local $2)
         (i32.const 4)
        )
        (get_local $0)
       )
      )
      (br_if $label$0
       (i32.gt_u
        (i32.add
         (get_local $2)
         (i32.load
          (get_local $3)
         )
        )
        (get_local $0)
       )
      )
     )
     (br_if $label$2
      (i32.lt_u
       (tee_local $3
        (i32.add
         (get_local $3)
         (i32.const 12)
        )
       )
       (get_local $1)
      )
     )
    )
   )
   (return)
  )
  (i32.store
   (tee_local $3
    (i32.add
     (get_local $0)
     (i32.const -4)
    )
   )
   (i32.and
    (i32.load
     (get_local $3)
    )
    (i32.const 2147483647)
   )
  )
 )
 (func $_Znwj (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (block $label$0
   (br_if $label$0
    (tee_local $0
     (call $malloc
      (tee_local $1
       (select
        (get_local $0)
        (i32.const 1)
        (get_local $0)
       )
      )
     )
    )
   )
   (loop $label$1
    (set_local $0
     (i32.const 0)
    )
    (br_if $label$0
     (i32.eqz
      (tee_local $2
       (i32.load offset=9884
        (i32.const 0)
       )
      )
     )
    )
    (call_indirect (type $FUNCSIG$v)
     (get_local $2)
    )
    (br_if $label$1
     (i32.eqz
      (tee_local $0
       (call $malloc
        (get_local $1)
       )
      )
     )
    )
   )
  )
  (get_local $0)
 )
 (func $_ZdlPv (param $0 i32)
  (block $label$0
   (br_if $label$0
    (i32.eqz
     (get_local $0)
    )
   )
   (call $free
    (get_local $0)
   )
  )
 )
 (func $_ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv (param $0 i32)
  (call $abort)
  (unreachable)
 )
 (func $_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEj (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (block $label$0
   (br_if $label$0
    (i32.ge_u
     (get_local $1)
     (i32.const -16)
    )
   )
   (set_local $2
    (i32.const 10)
   )
   (block $label$1
    (br_if $label$1
     (i32.eqz
      (i32.and
       (tee_local $5
        (i32.load8_u
         (get_local $0)
        )
       )
       (i32.const 1)
      )
     )
    )
    (set_local $2
     (i32.add
      (i32.and
       (tee_local $5
        (i32.load
         (get_local $0)
        )
       )
       (i32.const -2)
      )
      (i32.const -1)
     )
    )
   )
   (block $label$2
    (block $label$3
     (br_if $label$3
      (i32.and
       (get_local $5)
       (i32.const 1)
      )
     )
     (set_local $3
      (i32.shr_u
       (i32.and
        (get_local $5)
        (i32.const 254)
       )
       (i32.const 1)
      )
     )
     (br $label$2)
    )
    (set_local $3
     (i32.load offset=4
      (get_local $0)
     )
    )
   )
   (set_local $4
    (i32.const 10)
   )
   (block $label$4
    (br_if $label$4
     (i32.lt_u
      (tee_local $1
       (select
        (get_local $3)
        (get_local $1)
        (i32.gt_u
         (get_local $3)
         (get_local $1)
        )
       )
      )
      (i32.const 11)
     )
    )
    (set_local $4
     (i32.add
      (i32.and
       (i32.add
        (get_local $1)
        (i32.const 16)
       )
       (i32.const -16)
      )
      (i32.const -1)
     )
    )
   )
   (block $label$5
    (br_if $label$5
     (i32.eq
      (get_local $4)
      (get_local $2)
     )
    )
    (block $label$6
     (block $label$7
      (br_if $label$7
       (i32.ne
        (get_local $4)
        (i32.const 10)
       )
      )
      (set_local $6
       (i32.const 1)
      )
      (set_local $1
       (i32.add
        (get_local $0)
        (i32.const 1)
       )
      )
      (set_local $2
       (i32.load offset=8
        (get_local $0)
       )
      )
      (set_local $7
       (i32.const 0)
      )
      (br $label$6)
     )
     (set_local $1
      (call $_Znwj
       (i32.add
        (get_local $4)
        (i32.const 1)
       )
      )
     )
     (block $label$8
      (br_if $label$8
       (i32.gt_u
        (get_local $4)
        (get_local $2)
       )
      )
      (br_if $label$5
       (i32.eqz
        (get_local $1)
       )
      )
     )
     (block $label$9
      (br_if $label$9
       (i32.and
        (tee_local $5
         (i32.load8_u
          (get_local $0)
         )
        )
        (i32.const 1)
       )
      )
      (set_local $7
       (i32.const 1)
      )
      (set_local $2
       (i32.add
        (get_local $0)
        (i32.const 1)
       )
      )
      (set_local $6
       (i32.const 0)
      )
      (br $label$6)
     )
     (set_local $2
      (i32.load offset=8
       (get_local $0)
      )
     )
     (set_local $6
      (i32.const 1)
     )
     (set_local $7
      (i32.const 1)
     )
    )
    (block $label$10
     (block $label$11
      (br_if $label$11
       (i32.and
        (get_local $5)
        (i32.const 1)
       )
      )
      (set_local $5
       (i32.shr_u
        (i32.and
         (get_local $5)
         (i32.const 254)
        )
        (i32.const 1)
       )
      )
      (br $label$10)
     )
     (set_local $5
      (i32.load offset=4
       (get_local $0)
      )
     )
    )
    (block $label$12
     (br_if $label$12
      (i32.eqz
       (tee_local $5
        (i32.add
         (get_local $5)
         (i32.const 1)
        )
       )
      )
     )
     (drop
      (call $memcpy
       (get_local $1)
       (get_local $2)
       (get_local $5)
      )
     )
    )
    (block $label$13
     (br_if $label$13
      (i32.eqz
       (get_local $6)
      )
     )
     (call $_ZdlPv
      (get_local $2)
     )
    )
    (block $label$14
     (br_if $label$14
      (i32.eqz
       (get_local $7)
      )
     )
     (i32.store offset=4
      (get_local $0)
      (get_local $3)
     )
     (i32.store offset=8
      (get_local $0)
      (get_local $1)
     )
     (i32.store
      (get_local $0)
      (i32.or
       (i32.add
        (get_local $4)
        (i32.const 1)
       )
       (i32.const 1)
      )
     )
     (return)
    )
    (i32.store8
     (get_local $0)
     (i32.shl
      (get_local $3)
      (i32.const 1)
     )
    )
   )
   (return)
  )
  (call $abort)
  (unreachable)
 )
 (func $_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv (param $0 i32)
  (call $abort)
  (unreachable)
 )
 (func $memcmp (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (set_local $5
   (i32.const 0)
  )
  (block $label$0
   (br_if $label$0
    (i32.eqz
     (get_local $2)
    )
   )
   (block $label$1
    (loop $label$2
     (br_if $label$1
      (i32.ne
       (tee_local $3
        (i32.load8_u
         (get_local $0)
        )
       )
       (tee_local $4
        (i32.load8_u
         (get_local $1)
        )
       )
      )
     )
     (set_local $1
      (i32.add
       (get_local $1)
       (i32.const 1)
      )
     )
     (set_local $0
      (i32.add
       (get_local $0)
       (i32.const 1)
      )
     )
     (br_if $label$2
      (tee_local $2
       (i32.add
        (get_local $2)
        (i32.const -1)
       )
      )
     )
     (br $label$0)
    )
   )
   (set_local $5
    (i32.sub
     (get_local $3)
     (get_local $4)
    )
   )
  )
  (get_local $5)
 )
 (func $__wasm_nullptr (type $FUNCSIG$v)
  (unreachable)
 )
)
