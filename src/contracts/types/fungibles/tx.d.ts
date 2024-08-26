// Generated by dedot cli

import type { GenericSubstrateApi } from 'dedot/types';
import type { AccountId32Like, BytesLike } from 'dedot/codecs';
import type {
  GenericContractTx,
  GenericContractTxCall,
  ContractTxOptions,
  ContractSubmittableExtrinsic,
} from 'dedot/contracts';

export interface ContractTx<ChainApi extends GenericSubstrateApi> extends GenericContractTx<ChainApi> {
  /**
   *
   * @param {number} id
   * @param {AccountId32Like} to
   * @param {bigint} value
   * @param {ContractTxOptions} options
   *
   * @selector 0x84a15da1
   **/
  transfer: GenericContractTxCall<
    ChainApi,
    (
      id: number,
      to: AccountId32Like,
      value: bigint,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   *
   * @param {number} id
   * @param {AccountId32Like} from
   * @param {AccountId32Like} to
   * @param {bigint} value
   * @param {BytesLike} data
   * @param {ContractTxOptions} options
   *
   * @selector 0x0b396f18
   **/
  transferFrom: GenericContractTxCall<
    ChainApi,
    (
      id: number,
      from: AccountId32Like,
      to: AccountId32Like,
      value: bigint,
      data: BytesLike,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   *
   * @param {number} id
   * @param {AccountId32Like} spender
   * @param {bigint} value
   * @param {ContractTxOptions} options
   *
   * @selector 0x681266a0
   **/
  approve: GenericContractTxCall<
    ChainApi,
    (
      id: number,
      spender: AccountId32Like,
      value: bigint,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   *
   * @param {number} id
   * @param {AccountId32Like} spender
   * @param {bigint} value
   * @param {ContractTxOptions} options
   *
   * @selector 0xf551d422
   **/
  increaseAllowance: GenericContractTxCall<
    ChainApi,
    (
      id: number,
      spender: AccountId32Like,
      value: bigint,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   *
   * @param {number} id
   * @param {AccountId32Like} spender
   * @param {bigint} value
   * @param {ContractTxOptions} options
   *
   * @selector 0xf998ebd9
   **/
  decreaseAllowance: GenericContractTxCall<
    ChainApi,
    (
      id: number,
      spender: AccountId32Like,
      value: bigint,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   * 3. Asset Management:
   * - create
   * - start_destroy
   * - set_metadata
   * - clear_metadata
   * - asset_exists
   *
   * @param {number} id
   * @param {AccountId32Like} admin
   * @param {bigint} minBalance
   * @param {ContractTxOptions} options
   *
   * @selector 0xab700a1b
   **/
  create: GenericContractTxCall<
    ChainApi,
    (
      id: number,
      admin: AccountId32Like,
      minBalance: bigint,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   *
   * @param {number} id
   * @param {ContractTxOptions} options
   *
   * @selector 0x742cfc5f
   **/
  startDestroy: GenericContractTxCall<
    ChainApi,
    (id: number, options: ContractTxOptions) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   *
   * @param {number} id
   * @param {BytesLike} name
   * @param {BytesLike} symbol
   * @param {number} decimals
   * @param {ContractTxOptions} options
   *
   * @selector 0x0b787bb5
   **/
  setMetadata: GenericContractTxCall<
    ChainApi,
    (
      id: number,
      name: BytesLike,
      symbol: BytesLike,
      decimals: number,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   * 4. PSP-22 Mintable & Burnable Interface:
   * - mint
   * - burn
   *
   * @param {number} id
   * @param {AccountId32Like} account
   * @param {bigint} amount
   * @param {ContractTxOptions} options
   *
   * @selector 0xcfdd9aa2
   **/
  mint: GenericContractTxCall<
    ChainApi,
    (
      id: number,
      account: AccountId32Like,
      amount: bigint,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   *
   * @param {number} id
   * @param {AccountId32Like} account
   * @param {bigint} amount
   * @param {ContractTxOptions} options
   *
   * @selector 0xb1efc17b
   **/
  burn: GenericContractTxCall<
    ChainApi,
    (
      id: number,
      account: AccountId32Like,
      amount: bigint,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;
}
