'use server';

import fs from 'fs';
import path from 'path';
import { revalidatePath } from 'next/cache';

export async function updatePricing(formData: FormData) {
  const plans = [
    {
      id: 1,
      name: formData.get('plan1_name'),
      price: Number(formData.get('plan1_price')),
      features: (formData.get('plan1_features') as string).split(',').map(f => f.trim())
    },
    {
      id: 2,
      name: formData.get('plan2_name'),
      price: Number(formData.get('plan2_price')),
      features: (formData.get('plan2_features') as string).split(',').map(f => f.trim())
    }
  ];

  const filePath = path.join(process.cwd(), 'src/data/pricing.json');
  fs.writeFileSync(filePath, JSON.stringify(plans, null, 2), 'utf-8');
  revalidatePath('/admin/pricing');
  revalidatePath('/checkout');
}
