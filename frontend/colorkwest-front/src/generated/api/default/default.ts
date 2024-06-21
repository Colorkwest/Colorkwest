/**
 * Generated by orval v6.30.2 🍺
 * Do not edit manually.
 * openapi
 * OpenAPI spec version: 3.0.1
 */
import useSwr from 'swr'
import type {
  Arguments,
  Key,
  SWRConfiguration
} from 'swr'
import useSWRMutation from 'swr/mutation'
import type {
  SWRMutationConfiguration
} from 'swr/mutation'
import type {
  BrainAnswer,
  CreateQuest,
  DetailedQuest,
  GetUsersUsersGet200,
  HTTPValidationError,
  Quest
} from '../../dto'
import { mutate } from '../../../mutator/mutate';


  
  type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * @summary Root
 */
export const rootGet = (
    
 options?: SecondParameter<typeof mutate>) => {
      return mutate<unknown>(
      {url: `/`, method: 'GET'
    },
      options);
    }
  


export const getRootGetKey = () => [`/`] as const;


export type RootGetQueryResult = NonNullable<Awaited<ReturnType<typeof rootGet>>>
export type RootGetQueryError = unknown

/**
 * @summary Root
 */
export const useRootGet = <TError = unknown>(
   options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof rootGet>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof mutate> }
) => {
  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
  const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getRootGetKey() : null);
  const swrFn = () => rootGet(requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * @summary Get Quests
 */
export const getQuestsQuestsGet = (
    
 options?: SecondParameter<typeof mutate>) => {
      return mutate<DetailedQuest[]>(
      {url: `/quests`, method: 'GET'
    },
      options);
    }
  


export const getGetQuestsQuestsGetKey = () => [`/quests`] as const;


export type GetQuestsQuestsGetQueryResult = NonNullable<Awaited<ReturnType<typeof getQuestsQuestsGet>>>
export type GetQuestsQuestsGetQueryError = unknown

/**
 * @summary Get Quests
 */
export const useGetQuestsQuestsGet = <TError = unknown>(
   options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof getQuestsQuestsGet>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof mutate> }
) => {
  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
  const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getGetQuestsQuestsGetKey() : null);
  const swrFn = () => getQuestsQuestsGet(requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * @summary Create Quest
 */
export const createQuestQuestsPost = (
    createQuest: CreateQuest,
 options?: SecondParameter<typeof mutate>) => {
      return mutate<unknown>(
      {url: `/quests`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createQuest
    },
      options);
    }
  


export const getCreateQuestQuestsPostMutationFetcher = ( options?: SecondParameter<typeof mutate>) => {
  return (_: string, { arg }: { arg: CreateQuest }): Promise<unknown> => {
    return createQuestQuestsPost(arg, options);
  }
}
export const getCreateQuestQuestsPostMutationKey = () => `/quests` as const;

export type CreateQuestQuestsPostMutationResult = NonNullable<Awaited<ReturnType<typeof createQuestQuestsPost>>>
export type CreateQuestQuestsPostMutationError = HTTPValidationError

/**
 * @summary Create Quest
 */
export const useCreateQuestQuestsPost = <TError = HTTPValidationError>(
   options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof createQuestQuestsPost>>, TError, string, CreateQuest, Awaited<ReturnType<typeof createQuestQuestsPost>>> & { swrKey?: string }, request?: SecondParameter<typeof mutate> }
) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getCreateQuestQuestsPostMutationKey();
  const swrFn = getCreateQuestQuestsPostMutationFetcher(requestOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * @summary Edit Quest
 */
export const editQuestQuestsQuestIdPatch = (
    questId: unknown,
    quest: Quest,
 options?: SecondParameter<typeof mutate>) => {
      return mutate<unknown>(
      {url: `/quests/${questId}`, method: 'PATCH',
      headers: {'Content-Type': 'application/json', },
      data: quest
    },
      options);
    }
  


export const getEditQuestQuestsQuestIdPatchMutationFetcher = (questId: unknown, options?: SecondParameter<typeof mutate>) => {
  return (_: string, { arg }: { arg: Quest }): Promise<unknown> => {
    return editQuestQuestsQuestIdPatch(questId, arg, options);
  }
}
export const getEditQuestQuestsQuestIdPatchMutationKey = (questId: unknown,) => `/quests/${questId}` as const;

export type EditQuestQuestsQuestIdPatchMutationResult = NonNullable<Awaited<ReturnType<typeof editQuestQuestsQuestIdPatch>>>
export type EditQuestQuestsQuestIdPatchMutationError = HTTPValidationError

/**
 * @summary Edit Quest
 */
export const useEditQuestQuestsQuestIdPatch = <TError = HTTPValidationError>(
  questId: unknown, options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof editQuestQuestsQuestIdPatch>>, TError, string, Quest, Awaited<ReturnType<typeof editQuestQuestsQuestIdPatch>>> & { swrKey?: string }, request?: SecondParameter<typeof mutate> }
) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getEditQuestQuestsQuestIdPatchMutationKey(questId);
  const swrFn = getEditQuestQuestsQuestIdPatchMutationFetcher(questId,requestOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * @summary Answer Brain
 */
export const answerBrainQuestsQuestIdAnswerPost = (
    questId: unknown,
    brainAnswer: BrainAnswer,
 options?: SecondParameter<typeof mutate>) => {
      return mutate<unknown>(
      {url: `/quests/${questId}/answer`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: brainAnswer
    },
      options);
    }
  


export const getAnswerBrainQuestsQuestIdAnswerPostMutationFetcher = (questId: unknown, options?: SecondParameter<typeof mutate>) => {
  return (_: string, { arg }: { arg: BrainAnswer }): Promise<unknown> => {
    return answerBrainQuestsQuestIdAnswerPost(questId, arg, options);
  }
}
export const getAnswerBrainQuestsQuestIdAnswerPostMutationKey = (questId: unknown,) => `/quests/${questId}/answer` as const;

export type AnswerBrainQuestsQuestIdAnswerPostMutationResult = NonNullable<Awaited<ReturnType<typeof answerBrainQuestsQuestIdAnswerPost>>>
export type AnswerBrainQuestsQuestIdAnswerPostMutationError = HTTPValidationError

/**
 * @summary Answer Brain
 */
export const useAnswerBrainQuestsQuestIdAnswerPost = <TError = HTTPValidationError>(
  questId: unknown, options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof answerBrainQuestsQuestIdAnswerPost>>, TError, string, BrainAnswer, Awaited<ReturnType<typeof answerBrainQuestsQuestIdAnswerPost>>> & { swrKey?: string }, request?: SecondParameter<typeof mutate> }
) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getAnswerBrainQuestsQuestIdAnswerPostMutationKey(questId);
  const swrFn = getAnswerBrainQuestsQuestIdAnswerPostMutationFetcher(questId,requestOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * @summary Complete Quest
 */
export const completeQuestQuestsQuestIdCompletePost = (
    questId: unknown,
 options?: SecondParameter<typeof mutate>) => {
      return mutate<unknown>(
      {url: `/quests/${questId}/complete`, method: 'POST'
    },
      options);
    }
  


export const getCompleteQuestQuestsQuestIdCompletePostMutationFetcher = (questId: unknown, options?: SecondParameter<typeof mutate>) => {
  return (_: string, __: { arg: Arguments }): Promise<unknown> => {
    return completeQuestQuestsQuestIdCompletePost(questId, options);
  }
}
export const getCompleteQuestQuestsQuestIdCompletePostMutationKey = (questId: unknown,) => `/quests/${questId}/complete` as const;

export type CompleteQuestQuestsQuestIdCompletePostMutationResult = NonNullable<Awaited<ReturnType<typeof completeQuestQuestsQuestIdCompletePost>>>
export type CompleteQuestQuestsQuestIdCompletePostMutationError = HTTPValidationError

/**
 * @summary Complete Quest
 */
export const useCompleteQuestQuestsQuestIdCompletePost = <TError = HTTPValidationError>(
  questId: unknown, options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof completeQuestQuestsQuestIdCompletePost>>, TError, string, Arguments, Awaited<ReturnType<typeof completeQuestQuestsQuestIdCompletePost>>> & { swrKey?: string }, request?: SecondParameter<typeof mutate> }
) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getCompleteQuestQuestsQuestIdCompletePostMutationKey(questId);
  const swrFn = getCompleteQuestQuestsQuestIdCompletePostMutationFetcher(questId,requestOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * @summary Pending Quest
 */
export const pendingQuestQuestsQuestIdPendingPost = (
    questId: unknown,
 options?: SecondParameter<typeof mutate>) => {
      return mutate<unknown>(
      {url: `/quests/${questId}/pending`, method: 'POST'
    },
      options);
    }
  


export const getPendingQuestQuestsQuestIdPendingPostMutationFetcher = (questId: unknown, options?: SecondParameter<typeof mutate>) => {
  return (_: string, __: { arg: Arguments }): Promise<unknown> => {
    return pendingQuestQuestsQuestIdPendingPost(questId, options);
  }
}
export const getPendingQuestQuestsQuestIdPendingPostMutationKey = (questId: unknown,) => `/quests/${questId}/pending` as const;

export type PendingQuestQuestsQuestIdPendingPostMutationResult = NonNullable<Awaited<ReturnType<typeof pendingQuestQuestsQuestIdPendingPost>>>
export type PendingQuestQuestsQuestIdPendingPostMutationError = HTTPValidationError

/**
 * @summary Pending Quest
 */
export const usePendingQuestQuestsQuestIdPendingPost = <TError = HTTPValidationError>(
  questId: unknown, options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof pendingQuestQuestsQuestIdPendingPost>>, TError, string, Arguments, Awaited<ReturnType<typeof pendingQuestQuestsQuestIdPendingPost>>> & { swrKey?: string }, request?: SecondParameter<typeof mutate> }
) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getPendingQuestQuestsQuestIdPendingPostMutationKey(questId);
  const swrFn = getPendingQuestQuestsQuestIdPendingPostMutationFetcher(questId,requestOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * @summary Cancel Quest
 */
export const cancelQuestQuestsQuestIdCancelPost = (
    questId: unknown,
 options?: SecondParameter<typeof mutate>) => {
      return mutate<unknown>(
      {url: `/quests/${questId}/cancel`, method: 'POST'
    },
      options);
    }
  


export const getCancelQuestQuestsQuestIdCancelPostMutationFetcher = (questId: unknown, options?: SecondParameter<typeof mutate>) => {
  return (_: string, __: { arg: Arguments }): Promise<unknown> => {
    return cancelQuestQuestsQuestIdCancelPost(questId, options);
  }
}
export const getCancelQuestQuestsQuestIdCancelPostMutationKey = (questId: unknown,) => `/quests/${questId}/cancel` as const;

export type CancelQuestQuestsQuestIdCancelPostMutationResult = NonNullable<Awaited<ReturnType<typeof cancelQuestQuestsQuestIdCancelPost>>>
export type CancelQuestQuestsQuestIdCancelPostMutationError = HTTPValidationError

/**
 * @summary Cancel Quest
 */
export const useCancelQuestQuestsQuestIdCancelPost = <TError = HTTPValidationError>(
  questId: unknown, options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof cancelQuestQuestsQuestIdCancelPost>>, TError, string, Arguments, Awaited<ReturnType<typeof cancelQuestQuestsQuestIdCancelPost>>> & { swrKey?: string }, request?: SecondParameter<typeof mutate> }
) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getCancelQuestQuestsQuestIdCancelPostMutationKey(questId);
  const swrFn = getCancelQuestQuestsQuestIdCancelPostMutationFetcher(questId,requestOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * @summary Get Users
 */
export const getUsersUsersGet = (
    
 options?: SecondParameter<typeof mutate>) => {
      return mutate<GetUsersUsersGet200>(
      {url: `/users`, method: 'GET'
    },
      options);
    }
  


export const getGetUsersUsersGetKey = () => [`/users`] as const;


export type GetUsersUsersGetQueryResult = NonNullable<Awaited<ReturnType<typeof getUsersUsersGet>>>
export type GetUsersUsersGetQueryError = unknown

/**
 * @summary Get Users
 */
export const useGetUsersUsersGet = <TError = unknown>(
   options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof getUsersUsersGet>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof mutate> }
) => {
  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
  const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getGetUsersUsersGetKey() : null);
  const swrFn = () => getUsersUsersGet(requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
