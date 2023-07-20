import DrumPad from '../DrumPad';

export default function Drum() {
  return (
    <div id='display' className='w-8/12 h-5/6 mx-5 p-2 bg-slate-600 grid grid-cols-3 gap-4 rounded-xl'>
      <DrumPad keyPad="Q" color="bg-blue-900" keyColor='text-sky-100' />
      <DrumPad keyPad='W' color="bg-blue-800" keyColor='text-sky-100' />
      <DrumPad keyPad='E' color="bg-blue-700" keyColor='text-sky-100' />
      <DrumPad keyPad='A' color="bg-blue-600" keyColor='text-sky-100' />
      <DrumPad keyPad='S' color="bg-blue-500" keyColor='text-sky-100' />
      <DrumPad keyPad='D' color="bg-blue-400" keyColor='text-sky-100' />
      <DrumPad keyPad='Z' color="bg-blue-300" keyColor='text-sky-700' className="border-sky-950" />
      <DrumPad keyPad='X' color="bg-blue-200" keyColor='text-sky-800' className="border-sky-950" />
      <DrumPad keyPad='C' color="bg-blue-100" keyColor='text-sky-900' className="border-sky-950" />
    </div>
  );
}
