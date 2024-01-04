class CallAll{
	public static void main(String[] args)
	{
		try{
			Runtime  r = Runtime.getRuntime();
			Process p1 = r.exec("notepad");
			Process p2 = r.exec("calc");
		}catch(Exception e)
		{
			System.out.println("erro");
		}
	}
}