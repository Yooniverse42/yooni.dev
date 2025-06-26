import { createClient } from '@supabase/supabase-js';

// 환경변수에서 Supabase 설정 가져오기
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// 환경변수 검증
if (!supabaseUrl) {
  throw new Error(
    'VITE_SUPABASE_URL이 설정되지 않았습니다. .env 파일을 확인해주세요.',
  );
}

if (!supabaseAnonKey) {
  throw new Error(
    'VITE_SUPABASE_ANON_KEY가 설정되지 않았습니다. .env 파일을 확인해주세요.',
  );
}

// Supabase 클라이언트 생성
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
