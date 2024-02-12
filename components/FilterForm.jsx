'use client'

import { useForm, Controller } from 'react-hook-form';

import { useSearchParamValues } from '@/app/hooks/useParamValues';
import { useRouter } from 'next/navigation';

import Input from "./Input"
import ComboBoxDefaultWrapper from './ComboBox';
import Button from './Button';

export const countries = [
  { id: 'us', label: "USA", value: "us" },
  { id: 'ca', label: "Canada", value: "ca" },
  { id: 'it', label: "Italy", value: "it" },
  { id: 'fr', label: "France", value: "fr" },
  { id: 'de', label: "Germany", value: "de" },
  { id: 'ar', label: "Argentina", value: "ar" },
  { id: 'gr', label: "Greece", value: "gr" },
];

export const languages = [
  { id: 'en', label: "English", value: "en" },
  { id: 'es', label: "Spanish", value: "es" },
  {id: 'fr', label: "French", value: "fr" },
  {id: 'de', label: "German", value: "de" },
  
];


export const categories = [
  { id: 'general', label: "General", value: "general" },
  { id: 'sports', label: "Sports", value: "sports" },
  {id: 'business', label: "Business", value: "business" },
  {id: 'health', label: "Health", value: "health" },
  {id: 'science', label: "Science", value: "science" },
  {id: 'technology', label: "Technology", value: "technology" },
  
];


export const sorts = [
  { id: 'relevancy', label: "Relevancy", value: "relevancy" },
  { id: 'popularity', label: "Popularity", value: "popularity" },
  {id: 'publishedAt', label: "Date", value: "publishedAt" },
  
];






const FilterForm = () => {
  const router = useRouter()
  const params = useSearchParamValues()


  const createQueryString = (data = {}) => {
    const params = new URLSearchParams();
    
    if(!!data.q) {
      Object.entries(data).forEach(([key, value]) => {
        
          params.append(key, value?.id || value)
        
        
    });
    }
  
    return params.toString();
  };


  const {
      register,
      handleSubmit,
      control,
      reset,
      formState: {errors}
      } = useForm({
      defaultValues: {
        dateFrom: params.dateFrom || '',
        dateTo: params.dateTo || '',
        country: params.country || { id: 'us', label: "USA", value: "us" },
        category: params.category || { id: 'general', label: "General", value: "general" },
        language: params.language || { id: 'en', label: "English", value: "en" },
        sortBy: params.sortBy || { id: 'relevancy', label: "Relevancy", value: "relevancy" },
        q: params.q 
    }
  })

  const onSubmit = (data) => {
    
    if (!!data.q) {
      router.push(`/search-results?${createQueryString(data)}`)
    }
    
  }

  const getValCorrespondingOption = (value, options) => {
    
    const option = options.find((option) => option.value === value);
    return option;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        <div className=" border-t-gray-300 border border-white ">
          <h3 className="text-md font-medium leading-tight pt-4 mb-4">Sort By</h3>
          <Controller
              name="sortBy"
              control={control}
              rules={{
                required: "Please select a Language",
              }}
              render={({ field: { onChange, value, onBlur } }) => (
                <ComboBoxDefaultWrapper
                  label="Combo Box"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  options={sorts}
                  error={errors.country}
                />
              )}
            />
        </div>
        <div className=" border-t-gray-300 border border-white ">
            <h3 className="text-md font-medium leading-tight pt-4 mb-4">
              Date Range:
            </h3>
            <Input
             id={"dateFrom"}
             label={"From:"}
             type={"date"}
             register={register} 
             errors={errors} 
            />
            <div className='pt-4'></div>
            <Input
             id={"dateTo"}
             label={"To:"}
             type={"date"}
             register={register} 
             errors={errors} 
            />
        </div>
        <div className=" border-t-gray-300 border border-white ">
          <h3 className="text-md font-medium leading-tight pt-4 mb-4">Categories</h3>
          <Controller
              name="category"
              control={control}
              rules={{
                required: "Please select a category",
              }}
              render={({ field: { onChange, value, onBlur } }) => (
                <ComboBoxDefaultWrapper
                  label="Combo Box"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  options={categories}
                  error={errors.country}
                />
              )}
            />
        </div>
        <div className=" border-t-gray-300 border border-white ">
          <h3 className="text-md font-medium leading-tight pt-4 mb-4">Country</h3>
          <Controller
              name="country"
              control={control}
              rules={{
                required: "Please select a country",
              }}
              render={({ field: { onChange, value, onBlur } }) => (
                <ComboBoxDefaultWrapper
                  label="Combo Box"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  options={countries}
                  error={errors.country}
                />
              )}
            />
        </div>
        <div className=" border-t-gray-300 border border-white ">
          <h3 className="text-md font-medium leading-tight pt-4 mb-4">Language</h3>
          <Controller
              name="language"
              control={control}
              rules={{
                required: "Please select a Language",
              }}
              render={({ field: { onChange, value, onBlur } }) => (
                <ComboBoxDefaultWrapper
                  label="Combo Box"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  options={languages}
                  error={errors.country}
                />
              )}
            />
        </div>
        <div className='flex gap-4'>
          <Button danger={true} onClick={()=> reset()}>Reset</Button>
          <Button type='submit' >Apply</Button>
        </div>

    </form>
  )
}


export default FilterForm

