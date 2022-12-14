/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface BirdInterface extends utils.Interface {
  functions: {
    "crow()": FunctionFragment;
    "displayBirdEnergy()": FunctionFragment;
    "eatWater()": FunctionFragment;
    "eatWorm()": FunctionFragment;
    "fly()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "crow"
      | "displayBirdEnergy"
      | "eatWater"
      | "eatWorm"
      | "fly"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "crow", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "displayBirdEnergy",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "eatWater", values?: undefined): string;
  encodeFunctionData(functionFragment: "eatWorm", values?: undefined): string;
  encodeFunctionData(functionFragment: "fly", values?: undefined): string;

  decodeFunctionResult(functionFragment: "crow", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "displayBirdEnergy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "eatWater", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "eatWorm", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fly", data: BytesLike): Result;

  events: {};
}

export interface Bird extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BirdInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    crow(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    displayBirdEnergy(overrides?: CallOverrides): Promise<[number]>;

    eatWater(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    eatWorm(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fly(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  crow(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  displayBirdEnergy(overrides?: CallOverrides): Promise<number>;

  eatWater(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  eatWorm(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fly(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    crow(overrides?: CallOverrides): Promise<void>;

    displayBirdEnergy(overrides?: CallOverrides): Promise<number>;

    eatWater(overrides?: CallOverrides): Promise<void>;

    eatWorm(overrides?: CallOverrides): Promise<void>;

    fly(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    crow(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    displayBirdEnergy(overrides?: CallOverrides): Promise<BigNumber>;

    eatWater(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    eatWorm(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fly(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    crow(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    displayBirdEnergy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    eatWater(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    eatWorm(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fly(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
