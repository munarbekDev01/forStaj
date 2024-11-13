namespace SITE  {
    type ArticlesResponse = Array<{
        id: number
        name: string
        author: string
        image: string
        created_date: string
        updated_date: string
      }>
    
      type ArticlesRequest = void



      type ArticlWithIdResponse = {
        id: number
        name: string
        author: string
        image: string
        created_date: string
        updated_date: string
      }
        
      type ArticlWithIdRequest = number 


      type CoursesResponse = Array<{
        id: number
        name: string
        author: string
        price: number
        image: string
        description: string
        city: string
        created_date: string
        updated_date: string
      }>
      
      type CoursesRequest = void


      type CourseWithIdResponse = {
        id: number
        name: string
        author: string
        price: number
        image: string
        description: string
        city: string
        created_date: string
        updated_date: string
      }
        
      type CourseWithIdRequest = number


      type FreeWorkShopsResponse = Array<{
        id: number
        name: string
        description: string
        created_date: string
      }>

      type FreeWorkShopsRequest = void
      
      type FreeWorkShopWithIdResponse = {
        id: number
        name: string
        description: string
        created_date: string
      }
    
      type FreeWorkShopWithIdRequest = number

      
}