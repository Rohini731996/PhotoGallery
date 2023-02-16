import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
  reducerPath: 'api',
  tagTypes: ['Post'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://my.api.com/api' }),
  endpoints: builder => ({
    fetchUserPhotos: builder.query({
      query: () => '/users',
      providesTags: ['Post']
    }),
    updateComment: builder.mutation({
      query: (payload) => ({
        url: '/users',
        method: 'POST',
        body: payload
      }),
      invalidatesTags: ['Post'],
      onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData('fetchUserPhotos', id, (draft) => {
            Object.assign(draft, patch)
          }))
        queryFulfilled.catch(patchResult.undo)
      } 
    })
  })
})

export const {
  useFetchUserPhotosQuery,
  useUpdateCommentMutation
} = apiSlice