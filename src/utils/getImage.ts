import { supabase } from '@/lib/supabase';

// 개별 이미지 가져오기
export async function getImage(
  category: string,
  folderName: string,
  fileName: string,
): Promise<string | null> {
  try {
    const filePath = `${category}/${folderName}/${fileName}`;
    const { data } = supabase.storage.from('my').getPublicUrl(filePath);

    if (!data.publicUrl) {
      console.error('❌ 이미지 URL 생성 실패:', filePath);
      return null;
    }
    return convertToWebp(data.publicUrl);
  } catch (error) {
    console.error(error);
    return null;
  }
}

// 폴더별 모든 이미지 가져오기
export async function getAllImage(
  category: string,
  folderName: string,
): Promise<string[]> {
  try {
    const { data, error } = await supabase.storage
      .from('my')
      .list(`${category}/${folderName}`, {
        limit: 50,
        sortBy: { column: 'created_at', order: 'desc' },
      });

    if (error) throw error;

    return data.map((file) => {
      const filePath = `${category}/${folderName}/${file.name}`;
      return convertToWebp(
        supabase.storage.from('my').getPublicUrl(filePath).data.publicUrl,
      );
    });
  } catch (error) {
    console.error('❌ 이미지 목록 조회 에러:', error);
    return [];
  }
}

// webp로 변환
const convertToWebp = (imgUrl: string) => {
  const url = new URL(imgUrl);
  url.searchParams.set('format', 'webp');
  return url.toString();
};
